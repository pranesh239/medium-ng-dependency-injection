import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from './user.interface';

@Injectable()
export class ApiService {

  url =  'https://jsonplaceholder.typicode.com/users';

  constructor(
    private http: HttpClient
  ) {}

  getUserData(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getAdminDetails() {
    // THIS METHOD WILL PROVIDE ADMIN DETAILS, HENCE IT SHOULD NOT SUPPOSED TO BE AVAILABLE FOR ALL COMPONENTS TO ACCESS
  }

}
