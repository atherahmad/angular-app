/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HeadingService } from './heading.service';

describe('Service: Heading', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeadingService]
    });
  });

  it('should ...', inject([HeadingService], (service: HeadingService) => {
    expect(service).toBeTruthy();
  }));
});
