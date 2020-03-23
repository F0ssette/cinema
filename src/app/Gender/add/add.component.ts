import { GenderModel } from './../../models/gender.model';
import { GenderService } from './../../Service/gender.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-gender',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  form: FormGroup;

  constructor(
    private genderService: GenderService,
    private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.compose([])),
    })
  }

  onSubmit(): void {
    console.log(this.form.valid);
    if (this.form.valid) {
      const gender = this.form.value as GenderModel;

      this.genderService.addGender(gender)
      .subscribe(
        (data: GenderModel) => {
          this.router.navigate(['/']);
        },
        (err: Error) => console.log(err),
        () => console.log('Request has completed')
      );
    }
  }

}
