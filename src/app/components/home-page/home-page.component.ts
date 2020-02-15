import { Component, OnInit } from '@angular/core';
import {ActuatorService} from '../../services/actuator-service/actuator.service';
import {Actuator} from '../../common/actuator/actuator';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  endpointList: Actuator[] = [];

  constructor(private actuatorService: ActuatorService) { }

  ngOnInit() {
    this.getEndpoints();
  }

  getEndpoints() {
    this.actuatorService.getActuatorEndpoints().subscribe(
      data => this.endpointList = data
    );
  }
}
