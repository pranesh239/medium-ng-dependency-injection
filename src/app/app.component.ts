import { User } from './users.interface';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
        <ul>
          <li *ngFor="let user of (users$ | async)">
          {{user.name}}
          </li>
        </ul>
  `,
  styles: []
})
export class AppComponent implements OnInit {

  users$: Observable<User[]>;
  constructor(private data: ApiService) {}

  ngOnInit() {
    this.users$ = this.data.getUsers();
  }
}
