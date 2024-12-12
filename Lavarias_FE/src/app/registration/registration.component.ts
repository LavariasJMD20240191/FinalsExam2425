import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  user = {
    name: '',
    email: '',
    courses: '',
  };

  constructor(private userDataService: UserDataService, private router: Router) {}

  onSubmit() {
    const formattedUser = {
      ...this.user,
      courses: this.user.courses.split(',').map((course) => course.trim()),
    };
    this.userDataService.setUserData(formattedUser);
    this.router.navigate(['/user-profile']);
  }
}

