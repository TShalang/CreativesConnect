import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RegisterComponent } from './register/register.component';
import { ExploreComponent } from './exploreFolder/explore/explore.component';
import { NotificationsComponent } from './notificationsFolder/notifications/notifications.component';
import { ProfileComponent } from './profileFolder/profile/profile.component';
import { ToastrModule } from 'ngx-toastr';
import { AccountprofilesComponent } from './accountprofiles/accountprofiles.component';
import { AccountprofileComponent } from './accountprofiles/accountprofile/accountprofile.component';
import { UploadlineComponent } from './accountprofiles/uploadline/uploadline.component';
import { AccountprofileService } from './shared/accountprofile.service';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import { AccproComponent } from './profileFolder/accpro/accpro.component';
import { MynotificationsComponent } from './notificationsFolder/mynotifications/mynotifications.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ClientexploreComponent } from './exploreFolder/clientexplore/clientexplore.component';
import { ClientprofileComponent } from './profileFolder/clientprofile/clientprofile.component';
import {MatBadgeModule} from '@angular/material/badge';
import { ExploreidComponent } from './exploreFolder/exploreid/exploreid.component';
import { ProjectsComponent } from './projectFolder/projects/projects.component';
import { MyprojectsComponent } from './projectFolder/myprojects/myprojects.component';
import { ExplorenoidComponent } from './exploreFolder/explorenoid/explorenoid.component';
import {MatCardModule} from '@angular/material/card';
import { LoginClientComponent } from './login-client/login-client.component';
import { ProfileloggedComponent } from './profileFolder/profilelogged/profilelogged.component';
import { MyprojectsclientComponent } from './projectFolder/myprojectsclient/myprojectsclient.component';
import { ClaimpaymentComponent } from './claimpayment/claimpayment.component';
import { ClaimrefundComponent } from './claimrefund/claimrefund.component';
import { RefundComponent } from './refund/refund.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ExploreComponent,
    NotificationsComponent,
    ProfileComponent,
    AccountprofilesComponent,
    AccountprofileComponent,
    UploadlineComponent,
    AccproComponent,
    MynotificationsComponent,
    WelcomeComponent,
    ClientexploreComponent,
    ClientprofileComponent,
    ExploreidComponent,
    ProjectsComponent,
    MyprojectsComponent,
    ExplorenoidComponent,
    LoginClientComponent,
    ProfileloggedComponent,
    MyprojectsclientComponent,
    ClaimpaymentComponent,
    ClaimrefundComponent,
    RefundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDialogModule,
    MatTabsModule,
    MatBadgeModule,
    MatCardModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-full-width',
      preventDuplicates: true,
    }),
  ],
  entryComponents:[UploadlineComponent],
  providers: [AccountprofileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
