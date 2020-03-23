import { MovieModel as Movie } from './../models/movie.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/movie').pipe(
      tap(data => {
        console.log(data);
      }),
      catchError(this.handleError('getMovies', []))
    )
  }

  addMovie(movie: Movie): Observable<any> {
    return this.http.post<Movie>('http://127.0.0.1:8000/movie', movie).pipe(
      tap(data => {
        console.log(data);
      }),
      catchError(this.handleError('addMovie', []))
    )
  }

  /**
* Handle Http operation that failed.
* Let the app continue.
* @param operation - name of the operation that failed
* @param result - optional value to return as the observable result
*/
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return (error);
    };
  }
}
