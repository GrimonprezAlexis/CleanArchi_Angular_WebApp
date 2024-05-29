import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@/app/@core/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}

  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    const isAuthenticated = this._authService.isAuthenticated();
    if (!isAuthenticated) {
      this._router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
