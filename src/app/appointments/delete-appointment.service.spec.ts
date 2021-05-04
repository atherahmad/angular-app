/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DeleteAppointmentService } from './delete-appointment.service';

describe('Service: DeleteAppointment', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeleteAppointmentService]
    });
  });

  it('should ...', inject([DeleteAppointmentService], (service: DeleteAppointmentService) => {
    expect(service).toBeTruthy();
  }));
});
