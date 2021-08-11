import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-delay',
  templateUrl: './user-delay.component.html',
  styleUrls: ['./user-delay.component.scss']
})
export class UserDelayComponent {
  users: User[] = [];

  constructor(private userService: UserService) {
    this.getUsers();
  }

  // Filling users array
  getUsers() {
    return this.userService.getUsersDelay()
      .subscribe((data: any) => {
        this.users = data;
      });

  }

}
