import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ViewUserProfileComponent } from "./view-user-profile/view-user-profile.component";
import { ClassRecordComponent } from './class-record/class-record.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ConsultationComponent } from './consultation/consultation.component';

const routes: Routes = [
    { path: '', redirectTo: '/registration', pathMatch: 'full' },
    { path: 'registration', component: RegistrationComponent },
    { path: 'user-profile', component: ViewUserProfileComponent },
    { path: 'class-record', component: ClassRecordComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'consultation', component: ConsultationComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}