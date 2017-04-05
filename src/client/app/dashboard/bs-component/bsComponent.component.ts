import { Component, OnInit ,ViewChild,AfterContentInit,AfterViewInit,OnChanges,SimpleChanges} from '@angular/core';
import * as moment from 'moment';

import { IDetalleComprobante,DetalleComprobante,IIva,Iva,ILista,Pagination,PaginatedResult} from '../../shared/interfaces';
import { DataService } from '../../shared/services/data.service';

import { ModalDirective } from 'ng2-bootstrap';
//import { SlimLoadingBarService } from 'ng2-slim-loading-bar';


@Component({
	moduleId: module.id,
    selector: 'bs-component',
    templateUrl: './bs-component.component.html',
    styleUrls: ['./estilos/estilo-principal.css'],    
    providers: [ DataService ]
})

export class BSComponentComponent implements OnInit {

    
    private listaDetComprobantes: IDetalleComprobante[];
    private listaIvas: IIva[];
    private listaImpuestos:ILista[];
    private listaIvasDetalle: IIva[];
    idItemAgregar:number=0;
    itemSeleccionado : IDetalleComprobante;
    ivaAgregarItem:IIva;
    private data:Array<any> = this.listaDetComprobantes;
    private subtotal:number= 0;
    private total:number= 0;
    private total_impuestos:number= 0;
    public itemsPerPage: number = 2;
    public totalItems: number = 0;
    public currentPage: number = 1;
    apiHost: string;
    editarSeleccionadoLoaded: boolean = false;
   
  @ViewChild('childModal') public childModal: ModalDirective;
   
     
     constructor(private dataService: DataService){
          console.clear();
           this.cargaListas();         
     } 

      ngOnInit() {
              
    }


    cargaListas(){
        this.cargaDetComprobantes();
        this.cargarListaIvas();   
        this.inicializaIvasDetalle();
                   
    }

    inicializarDefaults(){
        this.ivaAgregarItem=this.listaIvas[0];
    }

    cargaDetComprobantes(){
          this.dataService.getDetalleComprobantes2()
             .subscribe((comp: IDetalleComprobante[]) => {this.listaDetComprobantes = comp;},
              error => {                 
              });
    }


    cargarListaIvas():IIva[]{
          this.dataService.getListaIVA()
             .subscribe((lista: IIva[]) => {
                 this.listaIvas = lista;
                 return this.listaIvas;},
              error => {         }
              );
              return null;
    }

    inicializaIvasDetalle(){
              this.dataService.getListaIVA()
             .subscribe((lista: IIva[]) => {
                 this.listaIvasDetalle = lista;
                 },
              error => {         }
              );

    this.listaIvasDetalle=this.inicializarArrayIVAS(this.listaIvasDetalle);

    }

    ngDoCheck(){     
                   
        this.subtotal=this.calcularSubtotal();
        this.total_impuestos=this.calcularImpuestos();
        this.total=this.subtotal+this.total_impuestos;
      //    this.cargarListaIvas();

        //  for(let indice in this.listaIvas){
        //    console.log('ngDoCheck-->listaIvas--->iva.id= '+this.listaIvas[indice].id +' , iva.descripcion: ' + this.listaIvas[indice].descripcion + ' , iva.valor: ' + this.listaIvas[indice].valor);
        //  } 

        //   for(let indice in this.listaIvasDetalle){
        //   console.log('ngDoCheck-->listaIvasDetalle--->iva.id= '+this.listaIvasDetalle[indice].id +' , iva.descripcion: ' + this.listaIvasDetalle[indice].descripcion + ' , iva.valor: ' + this.listaIvasDetalle[indice].valor);
        // } 
    // console.log('ngDoCheck-->Subtotal---> ' + this.subtotal);      
        this.idItemAgregar=this.buscaMaximoItem();
    }

    ngOnChanges(){
      //  console.log('total_impuestos: '+this.total_impuestos);
          this.subtotal=this.calcularSubtotal();
        this.total_impuestos=this.calcularImpuestos();
        this.total=this.subtotal+this.total_impuestos;
        //console.log('ngOnChanges-->Subtotal---> ' + this.subtotal);      
    }

    buscaMaximoItem():number{

    let id=1;
      if(this.listaDetComprobantes!=null){

          id=Math.max.apply(Math,this.listaDetComprobantes.map(function(o){return o.id;}))+1;
         
      }      
       this.idItemAgregar=id;

       return this.idItemAgregar
  }


    cargarItemsComprobantes(){        
    this.dataService.getDetalleComprobantes(1,1)
    .subscribe((res: PaginatedResult<IDetalleComprobante[]> ) => {
        this.listaDetComprobantes = res.result;
    },
    error => {                 
    });
   
    }

    
    public hideChildModal(): void {
        this.childModal.hide();
    }
    
     public showChildModal():void {
    this.childModal.show();
  }


 onNotifyIdMax($event){

}

   editar(item:IDetalleComprobante): void{
   console.log( 'edit presionado');
   console.log(item);
        
   this.itemSeleccionado = item;
   this.editarSeleccionadoLoaded = true;
   this.childModal.show();//.open('lg');
  }



  borrar(item:IDetalleComprobante): void{
   console.log( 'borrar presionado: ' + item.id);
   this.listaDetComprobantes.splice(this.buscaIndiceABorrar(item.id), 1);           
  }




  public buscaIndiceABorrar(idItem:number):number{       
            for (let indice in this.listaDetComprobantes) {
               if(this.listaDetComprobantes[indice].id==idItem)return +indice;           
            }
        return null;
       
    }
    public calcularSubtotal():number{
        var subtototal=0;
         for (let indice in this.listaDetComprobantes) subtototal+=this.listaDetComprobantes[indice].precio*this.listaDetComprobantes[indice].cantidad;                        
        return subtototal;
       
    }


    public totalizarIva(itemComprobante: IDetalleComprobante,subTotalListaIvas:IIva[]):IIva[]{        
        var valor=0;
            for (let indice in subTotalListaIvas) {
                    if(itemComprobante.oIva.id==subTotalListaIvas[indice].id){
                          subTotalListaIvas[indice].valor+= itemComprobante.precio*itemComprobante.cantidad*itemComprobante.oIva.valor/100;                      
                    }
            }
        return subTotalListaIvas;
       
    }

     public inicializarArrayIVAS(subTotalListaIvas:IIva[]):IIva[]{
            for (let indice in subTotalListaIvas) subTotalListaIvas[indice].valor=0;    
      return subTotalListaIvas;
       
    }

    
    public calcularTotalIva():void{
     //   this.listaIvasDetalle=this.listaIvas;
        this.listaIvasDetalle=this.inicializarArrayIVAS(this.listaIvasDetalle);
        var subtototal=0;
            for (let indice in this.listaDetComprobantes) {
                this.listaIvasDetalle= this.totalizarIva(this.listaDetComprobantes[indice],this.listaIvasDetalle)                                           
            }
    }

    public calcularImpuestos():number{

        var impuestos=0;
            for (let indice in this.listaDetComprobantes) {
                var iva = this.listaDetComprobantes[indice].oIva.valor/100;
                impuestos+=this.listaDetComprobantes[indice].precio*iva*this.listaDetComprobantes[indice].cantidad;           
            }


        this.calcularTotalIva();
        return impuestos;
       
    }

    
}

