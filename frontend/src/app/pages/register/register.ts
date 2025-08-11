import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
   name = '';
  email = '';
  password = '';
  confirmPassword = '';

  signup() {
    if (this.password !== this.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log('Signup attempted with:', this.name, this.email, this.password);
    // TODO: API call to backend for user registration
  }
}
