import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private userService: UserService){
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }

  // Getter for easy access to form controls in the template
  get f() {
    return this.registrationForm.controls;
  }

  // Handle form submission
  onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.registrationForm.invalid) {
      return;
    }

    // Call UserService to "register" the user (for now, we log it)
    this.userService.saveUserData(this.registrationForm.value).subscribe(response => {
      console.log(response); // Logs: 'Data saved successfully'
    });
  }

  // Reset form to initial state
  onReset() {
    this.submitted = false;
    this.registrationForm.reset();
  }
}
