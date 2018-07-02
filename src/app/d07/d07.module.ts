import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { D07Component } from './d07.component';
import {RouterModule} from '@angular/router';

export const routes = [
  { path: '', component: D07Component, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [D07Component]
})
export class D07Module { }
