import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Oferta, Informacje } from './app';
export const appConfig:ApplicationConfig={providers:[provideRouter([
 {path:'**',redirectTo:'oferta'},
 {path:'oferta',component:Oferta},
 {path:'info',component:Informacje}
])]};
