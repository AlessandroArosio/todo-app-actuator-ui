import { Component, OnInit } from '@angular/core';
import {ActuatorService} from '../../services/actuator-service/actuator.service';
import {Health} from '../../common/health/health';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  private health: Health;
  private maxMemory = ' GB';
  private currentMemory: string;

  public allDataFetched = false;
  public canvasWidth = 220;
  public needleValue = 65;
  public centralLabel = '';
  public name = 'Disk space in use';
  public bottomLabel = 'Calculating...';

  public options = {
    hasNeedle: true,
    needleColor: 'black',
    needleStartValue: 50,
    arcColors: ['rgb(61,204,91)', 'rgb(239,214,19)', 'rgb(255,84,84)'],
    arcDelimiters: [50, 75],
    rangeLabel: ['0 GB', this.maxMemory],
  };

  constructor(private actuatorService: ActuatorService) { }

  ngOnInit() {
    this.getHealth();
  }

  getHealth() {
    this.actuatorService.getHealth().subscribe(
      data => {
        this.health = data;
        this.updateGauge();
        },
      error => console.log(error)
    );
  }

  private updateGauge() {
    this.maxMemory = (this.health.components.diskSpace.details.total / 8589934592).toFixed(2) + ' GB';
    this.options.rangeLabel[1] = this.maxMemory;
    this.currentMemory = (this.health.components.diskSpace.details.free / 8589934592).toFixed(2);
    this.bottomLabel = this.currentMemory;
    this.allDataFetched = true;
  }

}
