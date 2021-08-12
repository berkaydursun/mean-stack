import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ConfirmationDialogService } from 'src/app/services/confirmation-dialog.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm = new FormGroup({
    usernameValue: new FormControl('', [Validators.required]),
    passwordValue: new FormControl('', [Validators.required])
  });
  constructor(private confirmationDialogService:ConfirmationDialogService,private router:Router,private userService: UserService, private alertifyService: AlertifyService) { }


  // Getting data from form and if datas' valid user updated.
  onSubmit() {
    this.userService.registerUser(this.registerForm.value.usernameValue, this.registerForm.value.passwordValue)
            .subscribe(data => {
              this.alertifyService.success("New User Registered Succesfully");
              this.router.navigateByUrl('/users');
            },
              error => {
                error ? this.alertifyService.alert(error.error.error + ' Error Status Code : ' + error.status) : false
              }
            );
        }
      }


