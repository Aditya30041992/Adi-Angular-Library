import { Component, OnInit } from '@angular/core';
import { NgxangularService } from './ngxangular.service';

@Component({
  selector: 'Ngxang-Ngxangular',
  templateUrl: './ngxangular.component.html',
  styleUrls: ['./ngxangular.component.css']
})
export class NgxangularComponent implements OnInit {

  constructor(private toast: NgxangularService) { }

  ngOnInit() {
  }

}
