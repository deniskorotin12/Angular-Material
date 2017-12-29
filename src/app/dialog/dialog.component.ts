import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HomeComponent } from '../home/home.component'
import { ViewChild } from '@angular/core/src/metadata/di';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
public contactId: number;
  constructor(private matDialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { 
    console.log(data);  
    this.contactId = data.id;
  }
   close(){
    
    //  let getLocalStorageContacts = JSON.parse(localStorage.getItem('contacts'))[0];
     this.matDialogRef.close(this.contactId);
   }
  ngOnInit() {
  }

}
