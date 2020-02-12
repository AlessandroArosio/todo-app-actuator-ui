import { Component, OnInit } from '@angular/core';
import {ActuatorService} from '../../services/actuator-service/actuator.service';
import {Actuator} from '../../common/actuator/actuator';

@Component({
  selector: 'app-endpoint-category',
  templateUrl: './endpoint-category.component.html',
  styleUrls: ['./endpoint-category.component.css']
})
export class EndpointCategoryComponent implements OnInit {
  endpointList: Actuator[];

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
