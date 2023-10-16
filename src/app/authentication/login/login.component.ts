import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  validateFormLogin!: UntypedFormGroup;
  requestLoginForm = {
    email: String,
    password: String,
  };

  constructor(
    private fb: UntypedFormBuilder,
    private loginService: AuthenticationService,
    public router: Router
  ) {}

  submitForm(): void {
    if (this.validateFormLogin.valid) {
      console.log('submit', this.validateFormLogin.value);
      this.requestLoginForm.email = this.validateFormLogin.value.username;
      this.requestLoginForm.password = this.validateFormLogin.value.password;
      console.log(this.requestLoginForm);

      this.loginService.login(this.requestLoginForm).subscribe(
        (res) => {
          console.log(res);
          this.router.navigateByUrl('/');
        },
        (error) => {
          console.error('Login failed:', error);
          // Xử lý lỗi nếu cần thiết
        }
      );
    } else {
      Object.values(this.validateFormLogin.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  ngOnInit(): void {
    this.validateFormLogin = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: true,
    });
  }
}
