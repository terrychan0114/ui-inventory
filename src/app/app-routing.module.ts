import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { RetrieveComponent } from './retrieve/retrieve.component'
import { UpdateComponent } from './update/update.component'
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'retrieve',
    component: RetrieveComponent
  },
  {
    path: 'update',
    component: UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
