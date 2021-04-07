/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CreateService } from './create.service';

describe('Service: Create', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateService]
    });
  });

  it('should ...', inject([CreateService], (service: CreateService) => {
    expect(service).toBeTruthy();
  }));
});
