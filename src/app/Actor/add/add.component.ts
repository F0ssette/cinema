import { ActorModel } from './../../models/actor.model';
import { ActorService } from './../../Service/actor.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-actor',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  form: FormGroup;

  constructor(
    private actorService: ActorService,
    private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.compose([])),
      firstname: new FormControl('', Validators.compose([])),
      birthday: new FormControl('', Validators.compose([])),
      gender: new FormControl('', Validators.compose([])),
      nationality: new FormControl('', Validators.compose([])),
    })
  }

  onSubmit(): void {
    console.log(this.form.valid);
    if (this.form.valid) {
      const actor = this.form.value as ActorModel;

      this.actorService.addActor(actor)
      .subscribe(
        (data: ActorModel) => {
          this.router.navigate(['/']);
        },
        (err: Error) => console.log(err),
        () => console.log('Request has completed')
      );
      console.log(this.form.value);
    }
  }

}
