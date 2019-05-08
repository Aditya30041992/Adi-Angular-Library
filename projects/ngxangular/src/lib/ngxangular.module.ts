import { NgModule,ModuleWithProviders} from '@angular/core';
import { NgxangularComponent } from './ngxangular.component';
import { CommonModule } from '@angular/common';
import { NgxangularService } from '../lib/ngxangular.service';
@NgModule({
  declarations: [NgxangularComponent],
  imports: [ CommonModule],
  exports: [NgxangularComponent]
})
export class NgxangularModule { 
  public static forRoot(config): ModuleWithProviders {
    return {
      ngModule: NgxangularModule,
      providers: [
        NgxangularService,
        { provide: 'config', useValue: config }
      ]
    };
  }
}
