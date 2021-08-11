import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/User';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ConfirmationDialogService } from 'src/app/services/confirmation-dialog.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  // Creates User array for filling users which comes from api.
  users: User[] = [];

  constructor(private confirmationDialogService: ConfirmationDialogService, private userService: UserService, private alertifyService: AlertifyService, private router: ActivatedRoute) {
    this.getUsers();
  }


  // Filling users array
  getUsers() {

    return this.userService.getUsers()
      .subscribe((data: any) => {
        this.users = data;
      });

  }

  

  deleteUser(id: any) {
    this.confirmationDialogService.confirm('Yes', 'No')
      .then((confirmed) => {
        if(confirmed){
          this.userService.deleteUser(id).subscribe(data => {
            this.alertifyService.success("User Deleted Successfully");
            window.location.reload();
          },
            (error: any) => {
              error ? this.alertifyService.alert(error.error.error + ' Error Status Code : ' + error.status) : false
            })

        
        }  
      })  
      .catch(() => console.log('User dismissed the dialog'));  

  }

}
