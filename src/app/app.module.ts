import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //added to add a form
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpComponent } from './emp/emp.component';
import { SummaryPipe } from './summary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule, //to match the above import
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
