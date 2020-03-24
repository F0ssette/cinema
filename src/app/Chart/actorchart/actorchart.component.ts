import { ActorService } from './../../Service/actor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actorchart',
  templateUrl: './actorchart.component.html',
  styleUrls: ['./actorchart.component.scss']
})
export class ActorchartComponent implements OnInit {

  actors = [];
  actress = [];
  acteur =[];

  constructor(
    private actorService: ActorService
  ) { }

  ngOnInit(): void {
  }

  public doughnutChartLabels = ['Acteurs', 'Actrices'];
  public doughnutChartData = [8, 2];
  public doughnutChartType = 'doughnut';

}
