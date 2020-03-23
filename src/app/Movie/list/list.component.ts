import { MovieService } from './../../Service/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  movies = [];

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie() {
    this.movieService.getMovies()
    .subscribe(data => {
      this.movies = data;
    })
  }
}
