import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent  implements OnInit{
  validateFormLogin!: UntypedFormGroup;

  submitForm(): void {
    if (this.validateFormLogin.valid) {
      console.log('submit', this.validateFormLogin.value);
    } else {
      Object.values(this.validateFormLogin.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(private fb: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.validateFormLogin = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: true
    });
  }
  
}


