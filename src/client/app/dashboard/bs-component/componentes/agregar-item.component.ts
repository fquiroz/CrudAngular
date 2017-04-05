import { OnInit,OnChanges,AfterContentInit,Component,Input,Output,EventEmitter,AfterViewChecked,AfterViewInit,AfterContentChecked} from '@angular/core';
import { IDetalleComprobante,DetalleComprobante,IIva,Iva} from '../../../shared/interfaces';

@Component({
	moduleId: module.id,
    selector: 'agregar-item',
    templateUrl: './agregar-item.html',
    styleUrls: ['../estilos/estilo-principal.css']
      
})

export class AgregarItemComponent implements OnInit,AfterContentChecked{
      itemDetalle:IDetalleComprobante=new DetalleComprobante();
      primeravez:boolean= false;
      @Input() ivaAgregarItem: Iva;
      @Input() idItemAgregar:number;
      @Input() listaDetComprobantes: IDetalleComprobante[];
      @Input() listaIvas: Iva[];
      @Output() notifyIDMax: EventEmitter<number> = new EventEmitter<number>();

 constructor(){        
 }
 
ngOnInit() {
    //     this.ivaAgregarItem=this.listaIvas[0];        
    }


ngAfterContentChecked (){
       if(this.listaIvas!=undefined){
           if(this.primeravez==false){
               //console.log('ngAfterContentChecked -->listaIvas cargadas true');
             this.ivaAgregarItem=this.listaIvas[0];
             this.primeravez=true;
            }else{
             //   console.log('ngAfterContentChecked --> listaIvas cargadas false');
            }                             
    } 
}


 
        
    borrarCamposItemAgregar(){
      this.itemDetalle=new DetalleComprobante();   
      this.ivaAgregarItem=this.listaIvas[0];    
  }
   
  agregarItem(){
      
      //console.log(' ivaAgregarItem: ' + this.ivaAgregarItem.valor) ;
      this.itemDetalle.id=this.idItemAgregar;
      this.itemDetalle.oIva=this.ivaAgregarItem;
      this.listaDetComprobantes.push(this.itemDetalle);
      this.buscaMaximoItem();
      this.borrarCamposItemAgregar();
    }

    buscaMaximoItem():number{

    let id=1;
      if(this.listaDetComprobantes!=null){

          id=Math.max.apply(Math,this.listaDetComprobantes.map(function(o){return o.id;}))+1;
         
      }      
       this.idItemAgregar=id;
       this.notifyIDMax.emit(id)
       return this.idItemAgregar
  }

  

}

/*ngAfterViewInit(){
    if(this.listaIvas!=undefined){
       console.log('ngAfterViewInit -->listaIvas cargadas OK');
    } 
}
  ngAfterViewChecked(){
     
    if(this.listaIvas!=undefined){
        console.log('ngAfterViewChecked -->listaIvas cargadas OK');
    } 
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit');  
    if(this.listaIvas!=undefined){
          console.log('ngAfterContentInit -->listaIvas cargadas OK');
    }
  }

  ngOnChanges(changes) {
    console.log('Changed');
   
  }*/