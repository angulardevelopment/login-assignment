import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  selectedData = [];
  constructor(public common: CommonService, private route: Router) { }

  ngOnInit(): void {
    const name = localStorage.getItem('selectedItem');

    this.selectedData = this.common.data.filter(item => item.First === name);

  }

  save() {

    this.common.data.concat(this.selectedData);
    alert('success info updated')
    this.route.navigate(['/home']); // navigate to other page

  }

}
