import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
    email = '';
  password = '';

  login() {
    console.log('Login attempted with:', this.email, this.password);
    // TODO: API call to backend for authentication
  }
}
