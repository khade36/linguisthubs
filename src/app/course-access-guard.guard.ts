import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RussianUComponent } from './userCourses/russian-u/russian-u.component';

@Injectable({
  providedIn: 'root'
})
export class CourseAccessGuardGuard implements CanActivate {
  constructor(private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('CourseAccess')=="Go to course"){
        return true;
      }
      else{
        localStorage.removeItem('CourseAccess');
        this.route.navigate(['russian']);
        return false;
      }
  }
  
}
