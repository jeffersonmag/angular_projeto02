import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  storage: Storage = localStorage;

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): 
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      if(!this.storage.getItem('usuario')){
        return this.router.parseUrl('/login');
      } else {
        return true;
      }
  };
}
