import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatCard, MatCardContent, MatCardTitle} from '@angular/material/card';
import {MatFormField} from '@angular/material/form-field';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatInput} from '@angular/material/input';
import {AuthService} from '../../../core/auth.service';
import {RegisterFormComponent} from '../register-form/register-form.component';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-login',
  imports: [
    MatCard,
    MatCardContent,
    MatFormField,
    ReactiveFormsModule,
    MatCardTitle,
    NgIf,
    MatInput,
    RegisterFormComponent,
    MatButton
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  @Input() error: string | null | undefined;
  showRegister: Boolean = false

  @Output() submitEM = new EventEmitter();
  form!: FormGroup

  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  submit() {
    console.log("test")
    if (this.form.valid) {
      this.authService.addUser(this.form.value)
        .subscribe(next => {
          console.log("success")
        })
    }
  }

  showRegisterForm(isShow: boolean) {
    console.log("test")
    this.showRegister = isShow
  }

}
