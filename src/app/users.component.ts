import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
  <pre>
    {{users$ | async | json}}
  </pre>
  `,
  providers: [
    {
      provide: ApiService,
      useFactory: (http) => {
        // THIS WILL RETURN A NEW INSTANCE OF THE PROVIDER WITH DYNAMIC ABITITY TO PASS DIFFERENT URL FROM DIFFERENT COMPONENTS
        return new ApiService(http, 'https://jsonplaceholder.typicode.com/users');
      },
      deps: [
        HttpClient
      ]
    }
  ]
})
export class UserComponent {

  users$;

  constructor(private api: ApiService) {
    this.users$ = this.api.getUserData();
  }
}
