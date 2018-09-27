import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';



const routes: Routes = [
    { path: '',  component: HomeComponent },
    { path: 'ABOUT',  component: AboutComponent },

];



export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
