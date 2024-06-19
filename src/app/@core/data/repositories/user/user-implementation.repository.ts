import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserEntity } from './entities/user-entity';
import { UserImplementationRepositoryMapper } from './mappers/user-repository.mapper';
import { UserRepository } from '@/app/@core/domain/repositories/user.repository';
import { UserModel } from '@/app/@core/domain/models/user.model';
@Injectable({
  providedIn: 'root',
})
export class UserImplementationRepository extends UserRepository {
  userMapper = new UserImplementationRepositoryMapper();
  constructor(private _http: HttpClient) {
    super();
  }
  login(params: { username: string; password: string }): Observable<UserModel> {
    return this._http
      .post<UserEntity>('https://example.com/login', { params })
      .pipe(map(this.userMapper.mapFrom));
  }
  register(params: {
    phoneNum: string;
    password: string;
  }): Observable<UserModel> {
    return this._http
      .post<UserEntity>('https://example.com/register', { params })
      .pipe(map(this.userMapper.mapFrom));
  }
  getUserProfile(): Observable<UserModel> {
    return this._http
      .get<UserEntity>('https://example.com/user')
      .pipe(map(this.userMapper.mapFrom));
  }
  logout(): Observable<void> {
    return this._http.post<void>('https://example.com/logout', {});
  }
}
