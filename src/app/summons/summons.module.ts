import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummonsComponent } from './summnons.component';
import {RouterModule} from '@angular/router';

export const routes = [
  { path: '', component: SummonsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [SummonsComponent]
})
export class SummonsModule { }
