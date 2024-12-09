import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ViewUserProfileComponent } from './view-user-profile/view-user-profile.component';

export const routes: Routes = [
    { path: '', redirectTo: 'register', pathMatch: 'full' },
    { path: 'register', component: RegistrationComponent },
    { path: 'user-profile', component: ViewUserProfileComponent }
];
