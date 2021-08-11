import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from './services/authservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  
  disabled: boolean = true;
  title = 'LoginPage';
  
  constructor(private router : Router){

  }
  

  

  

}
