import { Router } from '@angular/router';
import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public common: CommonService, private route:Router) { }

  ngOnInit(): void {
  }

  navigateToDetail(i){
    localStorage.setItem('selectedItem', this.common.data[i].First);
    this.route.navigate(['/detail']); // navigate to other page

  }
}
