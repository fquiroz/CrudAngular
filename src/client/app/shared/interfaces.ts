export interface IComprobante {
    id_comprobante:number;
    age_id: number;
    cod_suc: string;
    tipo_comprobante: string;
    importe_subtotal: number;
    importe_total: number;
    fecha_vencimiento: Date;
    fecha_recibido: Date;
    fecha_sap: Date;
    asociado: string;
    numero_doc: string;
    clasificacion_gasto: string;
    condicion_pago: string;
    gerencia_actual: string;
    gerencia_recibe: string;
    ultimo_usuario: string;
    ultima_fecha: Date;
    
}


export interface IProducto {
  id : number;
  descripcion : string;
  nemo : string;
  unidad : string;
}

export interface IIva {
  id? : number;
  descripcion? : string;
  valor? : number;   
}

export interface IIva2 {
  id : number;
  descripcion : string;
  valor : number;   
}

 export interface ILista {
   id : number;
   descripcion : string;
   valor : number; 
 }


    
export interface IDetalleComprobante {
  id?:number; 
  cantidad? : number;
  concepto? : string;
  precio? : number;
  unidad? : number;
  observacion?:string;
  oIva?:IIva;
  iva?:number;
}


 export class DetalleComprobante implements IDetalleComprobante {

    constructor(public id?:number, public cantidad?:number, public concepto?:string, public precio?:number, public unidad?:number ,public observacion?:string,public oIva?:IIva, public iva?:number  ) {
          this.oIva= new Iva();
     } 

    

  //     id:number; 
  // cantidad : number;
  // concepto : string;
  // precio : number;
  // unidad : number;
  // observacion:string;
  // oIva:Iva;
  // iva:number;
}    


export class Iva implements IIva{
  constructor(public id?:number , public descripcion?:string, public valor?:number){}

  //  id : number;
  // descripcion: string;
  // valor : number;   
}

	 
export interface Pagination {
    CurrentPage : number;
    ItemsPerPage : number;
    TotalItems : number;
    TotalPages: number;
}

export class PaginatedResult<T> {
    result :  T;
    pagination : Pagination;
}

export interface Predicate<T> {
    (item: T): boolean
}