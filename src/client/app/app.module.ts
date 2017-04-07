import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { BsDropdownModule } from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap';
import { PaginationModule } from 'ng2-bootstrap';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { SlimLoadingBarService, SlimLoadingBarComponent } from 'ng2-slim-loading-bar';
import { AccordionModule } from 'ng2-bootstrap';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		BsDropdownModule.forRoot(),
		ModalModule.forRoot(),
		RouterModule.forRoot(routes),
		PaginationModule.forRoot(),
		AccordionModule.forRoot(),
		LoginModule,
		PaginationModule,
		DashboardModule,
		SharedModule.forRoot()
	],
	declarations: [AppComponent,SlimLoadingBarComponent],
	providers: [{
		provide: APP_BASE_HREF,
		useValue: '<%= APP_BASE %>'
	},SlimLoadingBarService],
	bootstrap: [AppComponent]

})

export class AppModule { }
