import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  userName: string = '';
  password: string | number = '';
  loginMsg: string = '';

  users: any[] = [];

  constructor(private router: Router) {}

  login() {
  // let userName = document.getElementById("userName").value;
  // let password = document.getElementById("pswd").value;
  // let loginMsg = document.getElementById("loginMsg");

  let found = this.users.find(acc => acc.userName === this.userName && acc.password === this.password);

  if (found) {
    this.loginMsg = "Succeffuly Logged in!";
    
    //new page if logged in
    this.router.navigate(['/login-success']);
    

  } else {
    this.loginMsg = "User Not Found!";
    this.password = '';
  }
}


  // addLogin() {
  //   let user = {
  //     userName: this.userName,
  //     email: this.email,
  //     password: this.password
  //   };

  //   if (!this.userName || !this.email || !this.password) {
  //     alert("Error: Inputfield Empty");
  //     return;
  //   }

  //   //reset
  //   this.userName = '';
  //   this.email = '';
  //   this.password = '';
  // }

}
