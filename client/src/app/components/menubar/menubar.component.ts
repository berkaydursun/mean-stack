import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { ConfirmationDialogService } from 'src/app/services/confirmation-dialog.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent {

  items: MenuItem[] = this.getMenu();
  isLogged: boolean = false;

  constructor(public authService: AuthserviceService, private router: Router, private confirmationDialogService: ConfirmationDialogService) {

  }

  isLoggedIn() {
    return this.authService.isAuthenticated();
  }

  isLogOut() {
    this.confirmationDialogService.confirm('Yes', 'No')
      .then((confirmed) => {
        if (confirmed) {
          this.authService.logOut();
          this.router.navigateByUrl('login');
        }
      })

  }

  getMenu() {
    return this.items = [
      {

        label: 'Users',
        routerLink: "/users",
        icon:'pi pi-users'

      },
      {
        
        label: 'Profile',
        routerLink: "/profile",
        icon:'pi pi-user'
        
      },
      
      {
        
        label: 'Create User',
        routerLink: "/createUser",
        icon:'pi pi-user-edit'
        
      },
      {
        
        label: 'Register Admin',
        routerLink: "/register",
        icon:'pi pi-user-plus'
        
      },
      {
      
        label: 'Users (Delay)',
        routerLink: "/usersDelay",
        icon:'pi pi-clock'
      
      }
      
      
    ];
  }
  
  
  
}
