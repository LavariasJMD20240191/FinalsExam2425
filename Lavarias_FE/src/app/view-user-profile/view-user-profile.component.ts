import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './view-user-profile.component.html',
  styleUrl: './view-user-profile.component.css'
})
export class ViewUserProfileComponent implements OnInit {
  userData: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userData = this.userService.getUserData();
  }
}
