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
    {provide: ApiService, useClass: ApiService}
  ]
})
export class UserComponent {

  users$;

  constructor(private api: ApiService) {
    this.users$ = this.api.getUserData();
  }
}
