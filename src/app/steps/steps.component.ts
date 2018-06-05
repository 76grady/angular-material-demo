import { Component, OnInit } from '@angular/core';
import { PlanStep, SampleData } from '../shared/sample-data';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {
  steps: PlanStep[] = SampleData.getSteps();

  constructor() { }

  ngOnInit() {
  }

}
