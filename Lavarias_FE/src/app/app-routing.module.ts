import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ViewUserProfileComponent } from "./view-user-profile/view-user-profile.component";
import { ClassRecordComponent } from './class-record/class-record.component';

const routes: Routes = [
    { path: '', redirectTo: '/registration', pathMatch: 'full' },
    { path: 'registration', component: RegistrationComponent },
    { path: 'user-profile', component: ViewUserProfileComponent },
    { path: 'class-record', component: ClassRecordComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}