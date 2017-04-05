import { Component,OnInit } from '@angular/core';
import { IComprobante,IProducto } from '../../shared/interfaces';
import { DataService } from '../../shared/services/data.service';

  
//import { NotificationService } from '../../shared/services/notification.service';



/**
*	This class represents the lazy loaded HomeComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'home-cmp',
	templateUrl: 'home.component.html',
    providers: [ DataService ]
})

export class HomeComponent implements OnInit {
	 listaComprobantes: IComprobante[];
    // productos: IProducto[];
    // addingUser: boolean = false;

     constructor(private dataService: DataService){
            this.dataService.getComprobantes()
            .subscribe((productosP: IComprobante[]) => {
                 this.listaComprobantes = productosP;
             },
             error => {
                 
             });
     }        
    // private notificationService: NotificationService) { }


    ngOnInit() {
        this.dataService.getComprobantes()
            .subscribe((productosP: IComprobante[]) => {
                 this.listaComprobantes = productosP;
             },
             error => {
                 
             });
    }

}
