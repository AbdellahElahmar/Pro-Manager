import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatCard, MatCardContent, MatCardTitle} from '@angular/material/card';
import {MatFormField} from '@angular/material/form-field';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatInput} from '@angular/material/input';

@Component({
  selector: 'app-login',
  imports: [
    MatCard,
    MatCardContent,
    MatFormField,
    ReactiveFormsModule,
    MatCardTitle,
    NgIf,
    MatInput
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  @Input() error: string | null | undefined;

  @Output() submitEM = new EventEmitter();
  form!: FormGroup

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }

}
