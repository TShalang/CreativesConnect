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
import { ExploreComponent } from './explore/explore.component';
import { CategoriesComponent } from './categories/categories.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent } from './profile/profile.component';
import { ToastrModule } from 'ngx-toastr';
import { AccountprofilesComponent } from './accountprofiles/accountprofiles.component';
import { AccountprofileComponent } from './accountprofiles/accountprofile/accountprofile.component';
import { UploadlineComponent } from './accountprofiles/uploadline/uploadline.component';
import { AccountprofileService } from './shared/accountprofile.service';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ExploreComponent,
    CategoriesComponent,
    NotificationsComponent,
    ProfileComponent,
    AccountprofilesComponent,
    AccountprofileComponent,
    UploadlineComponent
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
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-full-width',
      preventDuplicates: true,
    }),
  ],
  entryComponents:[UploadlineComponent],
  providers: [AccountprofileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
