import { Component, OnInit } from '@angular/core';
import { PRODUCT_ELEMENTS, Table } from '../home/home.component';
import { debug } from 'util';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  fname: string;
  lname: string;
  phone: string;

  goBack(){
    document.getElementById('typeOfPage').innerText = 'Телефонний справочник';
  }
  addContact() {
    const lGetStorage = JSON.parse(localStorage.getItem('contacts'));
    if (!lGetStorage) {
      let add = { id: PRODUCT_ELEMENTS.length + 1, name: this.fname, surname: this.lname, phone: this.phone };
      PRODUCT_ELEMENTS.push(add);
      localStorage.setItem('contacts', JSON.stringify(PRODUCT_ELEMENTS));
    } else {
      PRODUCT_ELEMENTS.length = 0;
      for (let i of lGetStorage) {
        PRODUCT_ELEMENTS.push(i);
      }
      let add = { id: PRODUCT_ELEMENTS.length + 1, name: this.fname, surname: this.lname, phone: this.phone };
      PRODUCT_ELEMENTS.push(add);
      localStorage.setItem('contacts', JSON.stringify(PRODUCT_ELEMENTS));
    }
  }

  constructor() { }

  ngOnInit() {
  }

}