/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StoreslotsService } from './storeslots.service';

describe('Service: Storeslots', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreslotsService]
    });
  });

  it('should ...', inject([StoreslotsService], (service: StoreslotsService) => {
    expect(service).toBeTruthy();
  }));
});
