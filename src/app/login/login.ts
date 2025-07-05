import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  constructor() {}
  hidenShowPass() {
    this.isText = !this.isText; // Toggle the boolean value
    // Change the icon based on the boolean value
    this.type ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash"; 
     // Toggle the input type
    this.isText ? this.type = "text" : this.type = "password";
}
