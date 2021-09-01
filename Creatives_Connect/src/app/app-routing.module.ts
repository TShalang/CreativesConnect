import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountprofileComponent } from './accountprofiles/accountprofile/accountprofile.component';
import { AccountprofilesComponent } from './accountprofiles/accountprofiles.component';
import { AccproComponent } from './profileFolder/accpro/accpro.component';
import { ClientexploreComponent } from './exploreFolder/clientexplore/clientexplore.component';
import { ClientprofileComponent } from './profileFolder/clientprofile/clientprofile.component';
import { ExploreComponent } from './exploreFolder/explore/explore.component';
import { ExploreidComponent } from './exploreFolder/exploreid/exploreid.component';
import { LoginComponent } from './login/login.component';
import { MynotificationsComponent } from './notificationsFolder/mynotifications/mynotifications.component';
import { MyprojectsComponent } from './projectFolder/myprojects/myprojects.component';
import { NotificationsComponent } from './notificationsFolder/notifications/notifications.component';
import { ProfileComponent } from './profileFolder/profile/profile.component';
import { ProjectsComponent } from './projectFolder/projects/projects.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ExplorenoidComponent } from './exploreFolder/explorenoid/explorenoid.component';
import { LoginClientComponent } from './login-client/login-client.component';
import { ProfileloggedComponent } from './profileFolder/profilelogged/profilelogged.component';
import { MyprojectsclientComponent } from './projectFolder/myprojectsclient/myprojectsclient.component';
import { ClaimpaymentComponent } from './claimpayment/claimpayment.component';
import { ClaimrefundComponent } from './claimrefund/claimrefund.component';
import { RefundComponent } from './refund/refund.component';

const routes: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'explore', component: ExploreComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'accountprofiles', component: AccountprofilesComponent},
  {path: 'accountprofile', children: [
    {path: '', component: AccountprofileComponent},
    {path: 'edit/:id', component: AccountprofileComponent} 
  ]},
  {path: 'accpro', component: AccproComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'mynotifications', component: MynotificationsComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'clientexplore', component: ClientexploreComponent},
  {path: 'clientprofile', component: ClientprofileComponent},
  {path: 'exploreid', component: ExploreidComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'myprojects', component: MyprojectsComponent},
  {path: 'explorenoid', component: ExplorenoidComponent},
  {path: 'loginclient', component: LoginClientComponent},
  {path: 'profilelogged', component: ProfileloggedComponent},
  {path: 'myprojectsclient', component: MyprojectsclientComponent},
  {path: 'claimpayment', component: ClaimpaymentComponent},
  {path: 'claimrefund', component: ClaimrefundComponent},
  {path: 'refund', component: RefundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
