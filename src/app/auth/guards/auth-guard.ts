import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(private _router: Router){}
  set accessToken(token: string)
  {
      localStorage.setItem('accessToken', token);
  }

  get accessToken(): string
  {
      return localStorage.getItem('accessToken') ?? '';
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.accessToken && this.accessToken==="true"){
      return of(true);
    }else{
      this._router.navigate(['login']);
      return of(false)
    }
  }
}
