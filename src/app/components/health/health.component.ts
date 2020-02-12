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

  constructor(private healthService: ActuatorService) { }

  ngOnInit() {
    this.getHealth();
  }

  getHealth() {
    this.healthService.getHealth().subscribe(
      data => this.health = data,
      error => console.log(error)
    );
  }

}
