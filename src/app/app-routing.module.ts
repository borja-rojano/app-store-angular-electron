import {HomeComponent} from './components/home/home.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'elys',
    loadChildren: './elys/elys.module#ElysModule'
  },
  {
    path: 'summons',
    loadChildren: './summons/summons.module#SummonsModule'
  },
  {
    path: 'd07',
    loadChildren: './d07/d07.module#D07Module'
  },
  {
    path: 'seaster2',
    loadChildren: './seaster2/seaster2.module#Seaster2Module'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
