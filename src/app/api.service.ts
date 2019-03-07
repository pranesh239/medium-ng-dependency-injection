import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from './user.interface';

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient,
    private user: string
  ) {}

  getUserData(): Observable<User[]> {
    return this.http.get<User[]>(this.user);
  }

}
