import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElysComponent } from './elys.component';
import {RouterModule} from '@angular/router';

export const routes = [
  { path: '', component: ElysComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ElysComponent]
})
export class ElysModule { }
