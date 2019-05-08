import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgxangularService {

  message = new BehaviorSubject('');
  visible = new BehaviorSubject(false);

  constructor( @Inject('config') private config) { }

  update(val: string) {
    this.message.next(`${val} --- from ${this.config.brand}`);
  }

  show() {
    this.visible.next(true);
  }

  hide() {
    this.visible.next(false);
  }

}
