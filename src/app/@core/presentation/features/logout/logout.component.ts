import { LogoutUseCase } from '@/app/@core/domain/usecases/logout.usecase';
import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-logout',
  template: ` <button (click)="logout()">Logout</button> `,
})
export class LogoutComponent implements OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private _logoutUseCase: LogoutUseCase, private _router: Router) {}

  logout() {
    this._logoutUseCase.execute();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
