import { TestBed } from '@angular/core/testing';

import { ActuatorService } from './actuator.service';

describe('HealthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActuatorService = TestBed.get(ActuatorService);
    expect(service).toBeTruthy();
  });
});
