import { Routes } from '@angular/router';
import { Edwin } from './component/edwin/edwin';
import { Cesar } from './component/cesar/cesar';
import { Bryan } from './component/bryan/bryan';
import { Esteban } from './component/esteban/esteban';
import { Alejandro } from './component/alejandro/alejandro';

export const routes: Routes = [
   {
    path: 'Edwin',
    component: Edwin
    },

    {
    path: 'Cesar',
    component: Cesar
    } ,

    {
    path: 'Bryan',
    component: Bryan
    } ,

    {
    path: 'Esteban',
    component: Esteban
    } ,

    {
    path: 'Alejandro',
    component: Alejandro
    } 
];
