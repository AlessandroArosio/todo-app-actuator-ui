import { Component, OnInit } from '@angular/core';
import {ActuatorService} from '../../services/actuator-service/actuator.service';
import {Actuator} from '../../common/actuator/actuator';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-endpoint-category',
  templateUrl: './endpoint-category.component.html',
  styleUrls: ['./endpoint-category.component.css']
})
export class EndpointCategoryComponent implements OnInit {
  endpointList: Actuator[];
  private dummyList: Actuator[] = [];

  constructor(private actuatorService: ActuatorService) { }

  ngOnInit() {
    this.getEndpoints();
    this.createDummyList();
  }

  getEndpoints() {
    this.actuatorService.getActuatorEndpoints().subscribe(
      data => this.endpointList = data
    );
  }

  private createDummyList() {
    const actHealth: Actuator = new Actuator();
    const actInfo: Actuator = new Actuator();
    const actMetrics: Actuator = new Actuator();
    actHealth.name = 'Health';
    actInfo.name = 'Info';
    actMetrics.name = 'Metrics';
    this.dummyList.push(actHealth, actInfo, actMetrics);
  }

}
