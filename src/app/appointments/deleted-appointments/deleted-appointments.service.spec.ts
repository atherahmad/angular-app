/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DeletedAppointmentsService } from './deleted-appointments.service';

describe('Service: DeletedAppointments', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeletedAppointmentsService]
    });
  });

  it('should ...', inject([DeletedAppointmentsService], (service: DeletedAppointmentsService) => {
    expect(service).toBeTruthy();
  }));
});
