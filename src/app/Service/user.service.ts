import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  save(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>('http://127.0.0.1:8000/api/register', user);
  }

}