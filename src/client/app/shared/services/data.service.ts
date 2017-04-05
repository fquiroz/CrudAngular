
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { IProducto,IComprobante,IDetalleComprobante,IIva2, Pagination, PaginatedResult } from '../interfaces';

//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
//import {ConfigService} from '../config/config.service'
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {

  _baseUrl: string = '';
   
   comprobantes:IComprobante[]=[];
   itemsComprobantes:IDetalleComprobante[]=[];

  constructor(private http: Http){
        //private itemsService: ItemsService,
        // private configService: ConfigService) {
        // this._baseUrl = configService.getApiURI();
    }


//    getProductos(): Observable<IProducto[]> {
//         return this.http.get(this._baseUrl + 'productos')
//             .map((res: Response) => {
//                 return res.json();
//             })
//             .catch(this.handleError);
//     }



    getComprobantes2(): Observable<IComprobante[]> {
         return this.http.get('/assets/resources/comprobantes.json')
             .map((res: Response) => {
                this.comprobantes= res.json().DATA;
                 return this.comprobantes; 
             })
             .catch(this.handleError);
     }

         getListaIVA(): Observable<IIva2[]> {
         return this.http.get('/assets/resources/iva.json')
             .map((res: Response) => {                
                 return  res.json().DATA;
             })
             .catch(this.handleError);
     }


     

         getComprobantes(): Observable<IComprobante[]> {
         return this.http.get('/assets/resources/comprobantes.json')
             .map((res: Response) => {
                
                 return  res.json().DATA;
             })
             .catch(this.handleError);
     }

     getDetalleComprobante(id:number):IDetalleComprobante{
      var aux:IDetalleComprobante;
//filter(x => x.id === id);
       var detalleComp=this.itemsComprobantes.filter(x => x.id === id);
       this.itemsComprobantes.filter(x => x.id === id).map((res:IDetalleComprobante)=>{
           aux= res;
       })
       
       return aux;
        
      //filter(comprobantes => comprobantes.id === id);
     }

        getDetalleComprobantes2(): Observable<IDetalleComprobante[]> {
         return this.http.get('/assets/resources/detalleComprobantes.json')
             .map((res: Response) => {
                
                 return  res.json().DATA;
             })
             .catch(this.handleError);
     }


        getDetalleComprobantes(page?: number, itemsPerPage?: number): Observable<PaginatedResult<IDetalleComprobante[]>> {

              var peginatedResult: PaginatedResult<IDetalleComprobante[]> = new PaginatedResult<IDetalleComprobante[]>();

        let headers = new Headers();
        if (page != null && itemsPerPage != null) {
            headers.append('Pagination', page + ',' + itemsPerPage);
        }

          return this.http.get('/assets/resources/detalleComprobantes.json', {
            headers: headers
        })
            .map((res: Response) => {
                console.log(res.headers.keys());
                peginatedResult.result = res.json();

                if (res.headers.get("Pagination") != null) {
                    //var pagination = JSON.parse(res.headers.get("Pagination"));
              //      var paginationHeader: Pagination = this.itemsService.getSerialized<Pagination>(JSON.parse(res.headers.get("Pagination")));
                 //   console.log(paginationHeader);
                   // peginatedResult.pagination = paginationHeader;
                }
                return peginatedResult;
            })
            .catch(this.handleError);

        //  return this.http.get('/assets/resources/detalleComprobantes.json')
        //      .map((res: Response) => {
        //          return res.json().DATA;
        //      })
        //      .catch(this.handleError);
     }





//   createComprobante(comprobante: IComprobante): Observable<IComprobante> {
//         let headers = new Headers();
//         headers.append('Content-Type', 'application/json');

//         return this.http.post(this._baseUrl + 'comprobantes/', JSON.stringify(comprobante), {
//             headers: headers
//         })
//             .map((res: Response) => {
//                 return res.json();
//             })
//             .catch(this.handleError);
//     }


//          updateComprobante(comprobante: IComprobante): Observable<IComprobante> {

//         let headers = new Headers();
//         headers.append('Content-Type', 'application/json');

//         return this.http.put(this._baseUrl + 'comprobantes/' + comprobante.id_comprobante, JSON.stringify(comprobante), {
//             headers: headers
//         })
//             .map((res: Response) => {
//                 return;
//             })
//             .catch(this.handleError);
//     }

   
   
     private handleError(error: any) {
        var applicationError = error.headers.get('Application-Error');
        var serverError = error.json();
        var modelStateErrors: string = '';

        if (!serverError.type) {
            console.log(serverError);
            for (var key in serverError) {
                if (serverError[key])
                    modelStateErrors += serverError[key] + '\n';
            }
        }

        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;

        return Observable.throw(applicationError || modelStateErrors || 'Server error');
    }
}
