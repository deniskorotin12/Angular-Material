import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { DataTableResource } from 'angular-4-data-table';
import { MatTableDataSource } from "@angular/material";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  displayedColumns = ['name', 'surname', 'phone'];
  dataSource = new MatTableDataSource<Table>(JSON.parse(localStorage.getItem('contacts')));
  inputTextContent: string;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
    
  }

  ngOnInit() {}
}

export interface Table{
  id: number;
  name: string;
  surname: string;
  phone: string;
}
export let PRODUCT_ELEMENTS: Table[] = [
  // {id: 1, name: "Denys", surname: "Korotin", phone: "+380955587919"},
  // {id: 2, name: "Arsen", surname: "Tverdohleb", phone: "+380155587919"},
  // {id: 3, name: "Yulia", surname: "Tverdohleb", phone: "+380255587919"}
  // {id: 4, name: "Sergey", surname: "Gubarets", phone: "+380355587919"},
  // {id: 5, name: "Nikolay", surname: "Petravchuk", phone: "+340955587919"},
  // {id: 6, name: "Alex", surname: "Osaulenko", phone: "+380952587919"},
  // {id: 7, name: "Danil", surname: "Poc'ko", phone: "+380955587119"},
  // {id: 8, name: "Alex", surname: "Saianiy", phone: "+380935587919"},
  // {id: 9, name: "Sergey", surname: "Dudchenko", phone: "+380125587919"},
]

// let LocaleStorageElements = localStorage.setItem("contacts", JSON.stringify(PRODUCT_ELEMENTS));
// let parseLocaleStorageElements = JSON.parse(localStorage.getItem('contacts'));
