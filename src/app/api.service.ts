import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { USER_API } from './token';
import { User } from './user.interface';

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient,
    @Inject(USER_API) private user: string
  ) {}

  getUserData(): Observable<User[]> {
    return this.http.get<User[]>(this.user);
  }

}
