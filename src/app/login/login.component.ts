import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName;
  passWord;
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  navigateToHome() {

    if (this.userName === "admin" && this.passWord === "admin") {
      this.route.navigate(['/home']); // navigate to other page

    } else {
      alert('wrong details');
    }

  }

}
