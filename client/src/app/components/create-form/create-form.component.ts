import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ConfirmationDialogService } from 'src/app/services/confirmation-dialog.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent {


  createUserForm = new FormGroup({
    usernameValue: new FormControl('', Validators.required),
    firstnameValue: new FormControl('', Validators.required),
    lastnameValue: new FormControl('', Validators.required),
    avatarValue: new FormControl('', Validators.required),
    passwordValue: new FormControl('', Validators.required)
  })

  constructor(private confirmationDialogService: ConfirmationDialogService, private userService: UserService, private alertifyService: AlertifyService) { }

  // Getting data from from and create user
  onSubmit() {
    this.confirmationDialogService.confirm('Yes', 'No')
      .then((confirmed) => {
        if (confirmed) {
          this.userService.createUser(this.createUserForm.value.usernameValue, this.createUserForm.value.firstnameValue,this.createUserForm.value.lastnameValue,this.createUserForm.value.avatarValue || "",this.createUserForm.value.passwordValue)
            .subscribe(data => {
              this.alertifyService.success('User Created Successfully');
            },
              error => {
                error ? this.alertifyService.alert(error.error.error + ' Error Status Code : ' + error.status) : false
              }
            );
        }
      })
  }
}
