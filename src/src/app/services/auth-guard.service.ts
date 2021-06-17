import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router  } from '@angular/router';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  storage: Storage = localStorage;
  
  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  
      if(!this.storage.getItem('usuario')){
        return this.router.parseUrl('/login');
      } else {
        return true;
      }
  }
}
