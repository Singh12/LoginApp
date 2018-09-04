import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HrServicesComponent } from './components/hr-services/hr-services.component';
import { MedicalComponent } from './components/medical/medical.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';

export const routerConfig = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        data: { title: 'My Home Page' }
    },
    {
        path: 'about',
        component: AboutUsComponent,
        data: { title: 'About-Us' }
    },
    {
        path: 'services',
        component: HrServicesComponent,
        data: { title: 'services' }
    },
    {
        path: 'medical',
        component: MedicalComponent,
        data: { title: 'Medical' }
    },
    {
        path: 'clients',
        component: ClientsComponent,
        data: { title: 'Client' }
    },
    {
        path: 'contact',
        component: ContactComponent,
        data: { title: 'Contact-Us' }
    },
    {
        path: '**', component: PageNotFoundComponent,
        data: { title: 'Not-Found' }
    }
];

