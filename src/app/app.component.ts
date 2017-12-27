import {ChangeDetectorRef, Component, ViewEncapsulation} from '@angular/core';
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
  
  fillerNav = Array(10).fill(0).map((_, i) => `Nav Item ${i + 1}`);

  constructor() {
  }

 
}
