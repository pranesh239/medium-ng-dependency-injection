import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Component } from '@angular/core';
import { User } from './user.interface';

export abstract class UserDetails {
  abstract getUserData: () => Observable<User[]>;
}

@Component({
  selector: 'user',
  template: `
  <pre>
    {{users$ | async | json}}
  </pre>
  `,
  providers: [
    { provide: UserDetails, useExisting: ApiService }
  ]
})
export class UserComponent {

  users$;

  constructor(private api: UserDetails) {
    this.users$ = this.api.getUserData();
  }
}
