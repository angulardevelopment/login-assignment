import { Router } from '@angular/router';
import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import { SearchData, Format } from "truecallerjs";
import * as truecallerjs from 'truecallerjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public common: CommonService, private route:Router) { }

  ngOnInit(): void {
    console.log('hrf')
    performTruecallerSearch();
  }

  navigateToDetail(i){
    localStorage.setItem('selectedItem', this.common.data[i].First);
    this.route.navigate(['/detail']); // navigate to other page
  }
}



async function performTruecallerSearch(): Promise<void> {
  const searchData: SearchData = {
    number: "9912345678",
    countryCode: "IN",
    installationId: "a1k07--Vgdfyvv_rftf5uuudhuhnkljyvvtfftjuhbuijbhug",
  };

  try {
    const response: Format = await truecallerjs.search(searchData);
    console.log(response.json());

    // Additional response methods:
    // console.log(response.xml());
    // console.log(response.yaml());
    // console.log(response.text());

    // Example of available data from the response:
    console.log(response.getName()); // "Sumith Emmadi"
    console.log(response.getAlternateName()); // "sumith"
    console.log(response.getAddresses()); // {....}
    console.log(response.getEmailId()); // example@domain.com
    console.log(response.getCountryDetails()); // {...}
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

