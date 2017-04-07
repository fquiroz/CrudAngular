import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BsDropdownModule } from 'ng2-bootstrap';
import { RouterModule } from '@angular/router';

// import { CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';


@NgModule({
    imports: [CommonModule,BsDropdownModule,RouterModule],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})

export class HomeModule { }
