import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { USER_API } from './token';
import { UserComponent } from './users.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {provide: USER_API, useValue: 'https://jsonplaceholder.typicode.com/users'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
