import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from './authservice.service';


@Injectable({
  providedIn: 'root'
})
export class LoginguardService implements CanActivate{

  constructor(private auth: AuthserviceService, private router: Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.auth.isAuthenticated() ? true : this.router.navigate(["login"]);
  }

}
