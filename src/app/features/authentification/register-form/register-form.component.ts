import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {MatCard, MatCardContent, MatCardTitle} from '@angular/material/card';
import {MatFormField} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {NgIf} from '@angular/common';
import {AuthService} from '../../../core/auth.service';

@Component({
  selector: 'app-register-form',
  imports: [
    FormsModule,
    MatButton,
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatFormField,
    MatInput,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent implements OnInit{
  @Input() isVisible!: Boolean

  registerForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  submitRegister() {
    console.log("test")
    console.log(this.registerForm.get("firstName")?.valid)
    console.log(this.registerForm.get("lastName")?.valid)
    console.log(this.registerForm.get("email")?.valid)
    console.log(this.registerForm.get("password")?.valid)
    if(this.registerForm.valid) {
      const request = {
        ...this.registerForm.value
      }
      this.authService.addUser(request)
        .subscribe(next => {
          console.log("success")
        })
    }
  }


}
