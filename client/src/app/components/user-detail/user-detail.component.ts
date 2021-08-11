import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

  user:  any;
  user$: Observable<any> = this.showUser();

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private alertifyService: AlertifyService) {
    
  }

  showUser() {
    return this.userService.getSingleUser(this.activatedRoute.snapshot.paramMap.get('id'));
      // .subscribe(data => {
      //   this.user = data;
      // },
      //   error => {
      //     error ? this.alertifyService.alert(error.error.error + ' Error Status Code : ' + error.status) : false
      //   });
  }
}
