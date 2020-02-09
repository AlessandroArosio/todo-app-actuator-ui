import { Component, OnInit } from '@angular/core';
import {HealthService} from '../../services/health-service/health.service';
import {Health} from '../../common/health/health';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  private health: Health;

  constructor(private healthService: HealthService) { }

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
