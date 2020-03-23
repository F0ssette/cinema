import { GenderService } from './../../Service/gender.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-gender',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  genders = [];

  constructor(
    private genderService: GenderService
  ) { }

  ngOnInit(): void {
    this.getGender();
  }

  getGender() {
    this.genderService.getGenders()
    .subscribe(data => {
      this.genders = data;
    })
  }
}
