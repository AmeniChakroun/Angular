import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './layaout/home/home';
import { Notfound } from './layaout/notfound/notfound';
import { ListEvent } from './layaout/list-event/list-event';

const routes: Routes = [
  {path:'',component:Home},
  {path:'events',component:ListEvent},



  {path:'**',component:Notfound}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
