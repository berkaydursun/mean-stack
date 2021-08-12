import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [LoginService]
})
export class FormComponent {

  loginForm = new FormGroup({
    usernameValue: new FormControl('', [Validators.required]),
    passwordValue: new FormControl('',[Validators.required])
  });



  constructor(private loginService: LoginService, authService: AuthserviceService, router: Router, private alertifyService: AlertifyService) {
    if (authService.isAuthenticated()) {
      router.navigate(['users']);
    }
  }


  onSubmit() {
    this.loginService.loginRequest(this.loginForm.value.usernameValue, this.loginForm.value.passwordValue)
      .subscribe(data => {
        this.alertifyService.success("Welcome ! ");
      },
        error => {
          error ? this.alertifyService.alert(error.error.error + ' Error Status Code : ' + error.status) : false
        }

      );

  }



}
