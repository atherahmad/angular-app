/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppointmentDetailsService } from './appointment-details.service';

describe('Service: AppointmentDetails', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppointmentDetailsService]
    });
  });

  it('should ...', inject([AppointmentDetailsService], (service: AppointmentDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
