import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountprofileComponent } from './accountprofiles/accountprofile/accountprofile.component';
import { AccountprofilesComponent } from './accountprofiles/accountprofiles.component';
import { CategoriesComponent } from './categories/categories.component';
import { ExploreComponent } from './explore/explore.component';
import { LoginComponent } from './login/login.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'explore', component: ExploreComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'accountprofiles', component: AccountprofilesComponent},
  {path: 'accountprofile', children: [
    {path: '', component: AccountprofileComponent},
    {path: 'edit/:id', component: AccountprofileComponent} 
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
