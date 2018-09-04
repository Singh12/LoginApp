import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HrServicesComponent } from './components/hr-services/hr-services.component';
import { MedicalComponent } from './components/medical/medical.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {routerConfig } from './config';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import * as $ from 'jquery';
import { FooterCarouselComponent } from './components/footer-carousel/footer-carousel.component';
import { ServiceService } from './services/service.service';
@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HrServicesComponent,
    MedicalComponent,
    ClientsComponent,
    ContactComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FooterCarouselComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(
      routerConfig,
    )
  ],
  providers: [ServiceService, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
