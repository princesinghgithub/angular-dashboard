import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
path:"",redirectTo:'/contact/admin',pathMatch:'full'
  },
  {path:"contact/admin",component:ContactManagerComponent },
  {path:"contact/add",component:AddContactComponent },
  {path:"contact/edit/:contactid",component:EditContactComponent },
  {path:"contact/view/:contactid",component:ViewComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
