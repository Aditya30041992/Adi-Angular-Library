import { Component } from '@angular/core';
import { NgxangularService } from 'projects/ngxangular/src/public-api';

@Component({
  selector: 'mat-ta-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adi3004-library';


  constructor(private toast: NgxangularService) {
    this.toast.update('Is this thing working?');
    //this.toast.show();
  }
}
