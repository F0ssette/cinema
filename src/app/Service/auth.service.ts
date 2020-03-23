import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { map, tap } from 'rxjs/operators';

interface UserAuth {
  message: string;
  user: UserModel;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject: BehaviorSubject<UserModel>;
  private user$: Observable<UserModel>;
  private loginUrl = 'http://127.0.0.1:8000/user/login_check';

  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject<UserModel>(null);
    const data = localStorage.getItem('user_storage');

    if (data !== "undefined") {
      const user = JSON.parse(data);

      this.userSubject.next(user);
      this.user$ = this.userSubject.asObservable();
    }
  }

  // this.authService.user
  // value === UserModel | null
  public getUser(): UserModel {
    return this.userSubject.value;
  }

  public getToken() {
    return localStorage.getItem('user_token');
  }
  
  public login(username: string, password: string): Observable<UserModel> {
    const value = { username: username, password: password };

    return this.http.post<UserAuth>('http://127.0.0.1:8000/api/login_check', value)
      .pipe(
        tap((data: UserAuth) => console.log(data))
      )
      .pipe(
        map((data: UserAuth) => {
          localStorage.setItem('user_storage', JSON.stringify(data.user));
          localStorage.setItem('user_token', JSON.stringify(data.token));
          this.userSubject.next(data.user);

          return data.user;
        })
      );
  }

  logout(): void {
    localStorage.removeItem('user_storage');
    localStorage.removeItem('user_token');
    this.userSubject.next(null);
  }
}