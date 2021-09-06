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

    if (this.userName === "rammanohar@inncrewin.com" && this.passWord === "Inncrewin123") {
      this.route.navigate(['/home']); // navigate to other page

    } else {
      alert('wrong details');
    }

  }

}
