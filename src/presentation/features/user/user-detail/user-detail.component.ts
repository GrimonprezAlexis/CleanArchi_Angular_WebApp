import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetUserProfileUseCase } from 'src/domain/usecases/get-user-profile.usecase';
import { UserModel } from 'src/domain/models/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  user$!: Observable<UserModel>;

  constructor(
    private _route: ActivatedRoute,
    private _getUserProfileUseCase: GetUserProfileUseCase
  ) {}

  ngOnInit(): void {
    const userId = this._route.snapshot.paramMap.get('id');
    this.user$ = this._getUserProfileUseCase.execute();
  }
}
