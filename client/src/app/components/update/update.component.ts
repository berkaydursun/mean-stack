import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ConfirmationDialogService } from 'src/app/services/confirmation-dialog.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {

  user: any;
  updateForm = new FormGroup({
    usernameValue: new FormControl('', [Validators.required]),
    firstnameValue: new FormControl('', [Validators.required]),
    lastnameValue: new FormControl('', [Validators.required]),
    passwordValue: new FormControl('', [Validators.required])
  });
  constructor(private confirmationDialogService: ConfirmationDialogService, private userService: UserService, private activatedRoute: ActivatedRoute, private alertifyService: AlertifyService, private router: Router) {
    this.user = this.showUser();

  }

  // Getting data from form and if datas' valid user updated.
  onSubmit() {


    this.userService.updateUser(this.updateForm.value.usernameValue, this.updateForm.value.firstnameValue,this.updateForm.value.lastnameValue,this.updateForm.value.passwordValue, this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe(data => {
        this.alertifyService.success("User Updated Successfully");
      },
        error => {
          error ? this.alertifyService.alert(error.error.error + ' Error Status Code : ' + error.status) : false
        });


  }


  showUser() {
    return this.userService.getSingleUser(this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe(data => {
        this.user = data;
      });
  }
}
