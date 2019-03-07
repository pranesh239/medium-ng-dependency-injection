import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { API } from './token';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './users.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    // HERE INJECTING OUR DEPENDENCY IN THE NAME OF OUR INJECTION TOKEN
    @Inject(API) private api: string
  ) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.api);
  }

}
