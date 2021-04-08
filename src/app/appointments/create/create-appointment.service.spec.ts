/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CreateAppointmentService } from './create-appointment.service';

describe('Service: CreateAppointment', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateAppointmentService]
    });
  });

  it('should ...', inject([CreateAppointmentService], (service: CreateAppointmentService) => {
    expect(service).toBeTruthy();
  }));
});
