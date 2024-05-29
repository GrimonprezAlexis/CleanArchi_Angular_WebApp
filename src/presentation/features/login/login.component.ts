import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginUseCase } from '@/domain/usecases/user-login.usecase';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@/app/@core/services/auth.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private unsubscribe$: Subject<void> = new Subject<void>();
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private _fb: FormBuilder,
    private _userLoginUseCase: UserLoginUseCase,
    private _authService: AuthService,
    private _router: Router
  ) {
    this.loginForm = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this._userLoginUseCase
        .execute({ username, password })
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(
          (user) => {
            this._authService.login('sampleAuthToken'); // Replace with actual token
            this._router.navigate(['/users', user.id]);
          },
          (error) => (this.errorMessage = 'Invalid username or password')
        );
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
