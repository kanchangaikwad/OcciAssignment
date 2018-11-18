import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMovie } from '../models/movie';


import { Observable, of } from 'rxjs';
import { MockMovies } from '../models/mockDataMovies';
import { map } from 'rxjs/operators';







@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private _url = './assets/MovieData.json';


   Movies: IMovie[];
   Data: IMovie[];
  constructor(private http: HttpClient) {
        this.getMovies().subscribe(u => this.Movies = u);
  }

  getMovies(): Observable<IMovie[]> {

    const data = this.http.get<IMovie[]>(this._url);
    return data;
  }

  getMoviesByCategory(catName: string ): Observable<IMovie[]> {
    return of(this.Movies.filter(m => m.Genre.toLocaleLowerCase().includes(catName.toLocaleLowerCase())));
  }

  getMoviesByTitle(title: string ): Observable<IMovie[]> {
     return of(this.Movies.filter(m => m.Title.toLocaleLowerCase().includes(title.toLocaleLowerCase())));

  }

  getMoviesByType(type: string ): Observable<IMovie[]> {
   return of(this.Movies.filter(m => m.Type.toLocaleLowerCase().includes(type.toLocaleLowerCase())));


  }


}
