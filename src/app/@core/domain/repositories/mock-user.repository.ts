import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserModel } from '@/app/@core/domain/models/user.model';
import { UserRepository } from '@/app/@core/domain/repositories/user.repository';

@Injectable({
  providedIn: 'root',
})
export class MockUserRepository extends UserRepository {
  // Mock user data for testing
  private mockUser: UserModel = {
    id: '1',
    fullName: 'John Doe',
    username: 'johndoe',
    email: 'johndoe@example.com',
    phoneNum: '1234567890',
    createdAt: new Date(),
    profilePicture: 'https://example.com/profile.jpg',
    activationStatus: true,
  };

  constructor() {
    super();
  }

  // Mock login method
  login(params: { username: string; password: string }): Observable<UserModel> {
    return of(this.mockUser);
  }

  // Mock register method
  register(params: {
    phoneNum: string;
    password: string;
  }): Observable<UserModel> {
    return of(this.mockUser);
  }

  // Mock getUserProfile method
  getUserProfile(): Observable<UserModel> {
    return of(this.mockUser);
  }

  // Mock logout method
  logout(): Observable<void> {
    return of();
  }
}
