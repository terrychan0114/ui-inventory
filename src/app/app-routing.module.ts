import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { RetrieveComponent } from './retrieve/retrieve.component'
import { UpdateComponent } from './update/update.component'
import { NewDataComponent } from './new-data/new-data.component'
import { HelpComponent } from './help/help.component'
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
  },
  {
    path: 'new_data',
    component: NewDataComponent
  },
  {
    path: 'help',
    component: HelpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
