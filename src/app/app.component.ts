import {ChangeDetectorRef, Component, ViewEncapsulation, Input} from '@angular/core';
import { MatDialog } from '@angular/material';
import {FormControl} from '@angular/forms'; 

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class AppComponent {
  @Input() show: boolean = true;
  @Input() diameter:number = 25;
  constructor() {
  }

 public 
}
