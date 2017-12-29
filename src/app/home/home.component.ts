import { Component, OnInit, ViewEncapsulation, ViewChild } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { DataTableResource } from 'angular-4-data-table';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from "@angular/material";
import { DialogComponent } from "../dialog/dialog.component";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(JSON.parse(localStorage.getItem('contacts')));
  }
  focusPerson(personId) {
    window.location.replace(window.location.href + '/:' + personId);
  }
  public deleteContact(id) {
    let dlg = this.dialog.open(DialogComponent, { data: { id: id } });
    
    dlg.afterClosed().subscribe(contactId => {
       let refreshContacts = JSON.parse(localStorage.getItem('contacts'));
       refreshContacts.splice(refreshContacts.indexOf(JSON.parse(localStorage.getItem('contacts'))[contactId].id),1);
       console.log(refreshContacts);
       //localStorage.setItem('contacts', refreshContacts);
    })

  }

  displayedColumns = ['id', 'name', 'surname', 'phone'];
  dataSource = new MatTableDataSource<Table>(JSON.parse(localStorage.getItem('contacts')));
  inputTextContent: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;

  }
  getHeader() {
    document.getElementById('typeOfPage').innerText = 'Добавление контакта';
  }
  ngOnInit() { }

}

console.log(this.test);
export interface Table {
  id: number;
  name: string;
  surname: string;
  phone: string;
}
export let PRODUCT_ELEMENTS: Table[] = [];