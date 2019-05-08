import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxangularModule } from '../../projects/ngxangular/src/lib/ngxangular.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxangularModule.forRoot({ brand: 'ACSI.com' })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
