import { GenderService } from './../../Service/gender.service';
import { ActorService } from './../../Service/actor.service';
import { MovieService } from './../../Service/movie.service';
import { MovieModel } from './../../models/movie.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  form: FormGroup;
  actors = [];
  genders = [];

  constructor(
    private movieService: MovieService,
    private actorService: ActorService,
    private genderService: GenderService,
    private router: Router
  ) { }

  ngOnInit(): any {
    this.getActor();
    this.getGender();
    this.form = new FormGroup({
      title: new FormControl('', Validators.compose([])),
      description: new FormControl('', Validators.compose([])),
      year: new FormControl('', Validators.compose([])),
      picture: new FormControl('', Validators.compose([])),
      note: new FormControl('', Validators.compose([])),
      gender: new FormControl(this.getGender()),
      actor: new FormControl(this.getActor()),
    })
  }

  getActor() {
    this.actorService.getActors()
    .subscribe(data => {
      this.actors = data;
    })
  }

  getGender() {
    this.genderService.getGenders()
    .subscribe( data => {
      this.genders = data;
    })
  }

  onSubmit(): void {
    console.log(this.form.valid);
    if (this.form.valid) {
      const movie = this.form.value as MovieModel;

      this.movieService.addMovie(movie)
        .subscribe(
          (data: MovieModel) => {
            this.router.navigate(['/']);
          },
          (err: Error) => console.log(err),
          () => console.log('Request has completed')
        );
      console.log(this.form.value);
    }
  }

}
