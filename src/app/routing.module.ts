import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceOfferedComponent } from './service-offered/service-offered.component';
import { ProductsComponent } from './products/products.component';
import { TeamsComponent } from './teams/teams.component';



const routes: Routes = [
    { path: '',  component: HomeComponent },
    { path: 'ABOUT',  component: AboutComponent },
    { path: 'SERVICES',  component: ServiceOfferedComponent },
    { path: 'PRODUCTS',  component: ProductsComponent },
    { path: 'TEAM',  component: TeamsComponent },




];



export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
