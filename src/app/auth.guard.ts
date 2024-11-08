import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');

    // If user is not logged in, redirect to the login page
    if (isLoggedIn !== 'true') {
      this.router.navigate(['/login']);
      return false; // Deny access to the posts page
    }

    return true; // Allow access to the posts page
  }
}
