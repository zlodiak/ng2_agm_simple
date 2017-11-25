import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MarkerService } from './services/marker.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
		AgmCoreModule.forRoot({
		  apiKey: 'AIzaSyDT2NO8RgOBPpi3Hph-sjfyE1zyRPAoMnQ'
		})    
  ],
  providers: [MarkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
