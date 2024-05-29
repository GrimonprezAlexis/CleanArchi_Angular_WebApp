import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginUseCase } from '@/domain/usecases/user-login.usecase';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private userLoginUseCase: UserLoginUseCase,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.userLoginUseCase.execute({ username, password }).subscribe(
        (user) => {
          this.authService.login('sampleAuthToken'); // Replace with actual token
          this.router.navigate(['/users', user.id]);
        },
        (error) => (this.errorMessage = 'Invalid username or password')
      );
    }
  }
}
