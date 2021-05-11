/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UpdateAppointmentService } from './update-appointment.service';

describe('Service: UpdateAppointment', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateAppointmentService]
    });
  });

  it('should ...', inject([UpdateAppointmentService], (service: UpdateAppointmentService) => {
    expect(service).toBeTruthy();
  }));
});
