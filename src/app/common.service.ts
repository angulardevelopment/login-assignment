import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  data = [
    { First: 'Siva', Last: 'Selvam', Email: 'siva@gmail.com', Age: 28 },
    { First: 'dcads', Last: 'Selvam1', Email: 'siva1@gmail.com', Age: 18 },
  ];
  constructor() {}
}
