import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { tap, delay, finalize, catchError } from 'rxjs/operators';
import { of, Subscription } from 'rxjs';

import { ApiService } from '@data/service/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  error: string;
  isLoading: boolean;
  registerForm: FormGroup;

  private sub = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService
  ) {
    this.buildForm();
  }

  ngOnInit() {}

  get f() {
    return this.registerForm.controls;
  }

  register() {
    this.isLoading = true;
    const credentials = this.registerForm.value;
    const _credentials = Object.assign({
      "firstName": "test",
      "lastName": "test",
      "middleName": "test",
      "role": "admin",
      "isVerified": 0,
      "isDeleted": 0,
      "email": "test@test.com",
    }, credentials);
    this.sub = this.apiService
      .create(_credentials)
      .pipe(
        tap(() => this.router.navigate(['/dashboard/home'])),
        finalize(() => (this.isLoading = false)),
        catchError(error => of((this.error = error)))
      )
      .subscribe();
  }

  private buildForm(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
