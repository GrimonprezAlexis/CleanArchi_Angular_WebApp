import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isAuthenticatedSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  constructor() {
    // Check local storage or session storage for existing auth token/session
    const token = localStorage.getItem('authToken');
    if (token) {
      this._isAuthenticatedSubject.next(true);
    }
  }

  login(token: string): void {
    localStorage.setItem('authToken', token);
    this._isAuthenticatedSubject.next(true);
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this._isAuthenticatedSubject.next(false);
  }

  isAuthenticated(): boolean {
    return this._isAuthenticatedSubject.getValue();
  }

  getAuthStatus(): Observable<boolean> {
    return this._isAuthenticatedSubject.asObservable();
  }
}
