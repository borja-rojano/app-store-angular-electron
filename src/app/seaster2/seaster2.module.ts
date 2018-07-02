import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Seaster2Component} from './seaster2.component';
import {RouterModule} from '@angular/router';

export const routes = [
  { path: '', component: Seaster2Component, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [Seaster2Component]
})
export class Seaster2Module { }
