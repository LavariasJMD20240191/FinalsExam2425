import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewUserProfileComponent } from './view-user-profile/view-user-profile.component';
import { ClassRecordComponent } from './class-record/class-record.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ConsultationComponent } from './consultation/consultation.component';

@NgModule({
    declarations: [AppComponent, RegistrationComponent, ViewUserProfileComponent, ClassRecordComponent],
    imports: [BrowserModule, AppRoutingModule, FormsModule, RouterModule, HeaderComponent, FooterComponent],
    providers: [],
    bootstrap: [AppComponent],
    schemas: []
  })
  export class AppModule {}