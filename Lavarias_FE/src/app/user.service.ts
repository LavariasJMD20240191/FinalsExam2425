import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  register(_value: any) {
    throw new Error('Method not implemented.');
  }
  private userData: any = null;

  constructor() { }

  //Store user data
  setUserData(userData: any): void {
    this.userData = userData;
    localStorage.setItem('userData', JSON.stringify(userData)); // Optionally store it in localStorage
  }

  // Get user data
  getUserData(): any {
    if (!this.userData) {
      this.userData = JSON.parse(localStorage.getItem('userData') || 'null');
    }
    return this.userData;
  }
  saveUserData(userData: any) {
    localStorage.setItem('userData', JSON.stringify(userData));
    return of('Data saved successfully'); // Return an observable
  }
}
