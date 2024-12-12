import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user.service';

@Component({
  selector: 'app-view-user-profile',
  templateUrl: './view-user-profile.component.html',
  styleUrl: './view-user-profile.component.css'
})
export class ViewUserProfileComponent implements OnInit {
  userData: any;
  userService: any;

  constructor(private userDataService: UserDataService) {}

  ngOnInit() {
    this.userData = this.userDataService.getUserData();
  }

  deleteUserData() {
    this.userDataService.clearUserData();
    this.userData = null;
  }
}
