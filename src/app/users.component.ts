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
