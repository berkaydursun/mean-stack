import { Component} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  user:any=sessionStorage.getItem('user');
  
  myProfileInfo:any=JSON.parse(this.user);
  constructor() { }


}
