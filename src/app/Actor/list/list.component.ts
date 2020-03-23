import { ActorService } from './../../Service/actor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-actor',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  actors = [];

  constructor(
    private actorService: ActorService
  ) { }

  ngOnInit(): void {
    this.getActor();
  }

  getActor() {
    this.actorService.getActors()
    .subscribe(data => {
      this.actors = data;
    })
  }
}
