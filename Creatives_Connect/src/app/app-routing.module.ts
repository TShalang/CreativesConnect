import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountprofileComponent } from './accountprofiles/accountprofile/accountprofile.component';
import { AccountprofilesComponent } from './accountprofiles/accountprofiles.component';
import { AccproComponent } from './accpro/accpro.component';
import { CategoriesComponent } from './categories/categories.component';
import { ClientexploreComponent } from './clientexplore/clientexplore.component';
import { ClientprofileComponent } from './clientprofile/clientprofile.component';
import { ExploreComponent } from './explore/explore.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { LoginComponent } from './login/login.component';
import { MynotificationsComponent } from './mynotifications/mynotifications.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'explore', component: ExploreComponent},
  {path: 'profile', component: ProfileComponent},
 
  {path: 'categories', component: CategoriesComponent},
  {path: 'accountprofiles', component: AccountprofilesComponent},
  {path: 'accountprofile', children: [
    {path: '', component: AccountprofileComponent},
    {path: 'edit/:id', component: AccountprofileComponent} 
  ]},
  {path: 'accpro', component: AccproComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'mynotifications', component: MynotificationsComponent},
  {path: 'invoice', component: InvoiceComponent},
  // {path: 'nav', component: InvoiceComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'clientexplore', component: ClientexploreComponent},
  {path: 'clientprofile', component: ClientprofileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
