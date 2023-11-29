import { TestBed } from '@angular/core/testing';

import { EncoderServiceService } from './encoder-service.service';

describe('EncoderServiceService', () => {
  let service: EncoderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncoderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
