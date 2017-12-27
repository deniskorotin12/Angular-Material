import { Component, OnInit } from '@angular/core';
import { PRODUCT_ELEMENTS } from '../home/home.component'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  fname: string;
  lname: string;
  phone: string = '(0)';

  addContact(){
    let add = {id: PRODUCT_ELEMENTS.length, name: this.fname, surname: this.lname, phone: this.phone}
    PRODUCT_ELEMENTS.push(add);
    localStorage.setItem('contacts', JSON.stringify(PRODUCT_ELEMENTS));
  }

  constructor() { }

  ngOnInit() {
  }

}