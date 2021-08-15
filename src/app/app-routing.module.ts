import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandenlijstComponent } from './landenlijst/landenlijst.component';
import { MenuComponent } from './menu/menu.component';
import { MuntenlijstComponent } from './muntenlijst/muntenlijst.component';

const routes: Routes = [{path:'', redirectTo: '/menu', pathMatch:'full' },
{path:'menu', component: MenuComponent,
  children : [  
  {path:'landenlijst', component: LandenlijstComponent},
  {path:'muntenlijst', component: MuntenlijstComponent}] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
