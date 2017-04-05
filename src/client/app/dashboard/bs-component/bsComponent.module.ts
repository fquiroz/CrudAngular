import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap';
import { MyDatePickerModule } from 'mydatepicker';
import { PaginationModule } from 'ng2-bootstrap';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ng2-bootstrap';



import { BSComponentComponent } from './bsComponent.component';
import { AgregarItemComponent } from './componentes/agregar-item.component';
import { AgregarImpuestoComponent } from './componentes/agregar-impuesto.component';
import { DatosCabeceraComponent } from './componentes/datos-cabecera.component';

@NgModule({
    imports: [CommonModule,FormsModule,
    MyDatePickerModule,
    DropdownModule,
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    AccordionModule.forRoot()],
    declarations: [BSComponentComponent,AgregarItemComponent,AgregarImpuestoComponent,DatosCabeceraComponent],
    exports: [BSComponentComponent]
})

export class BSComponentModule {

 }
