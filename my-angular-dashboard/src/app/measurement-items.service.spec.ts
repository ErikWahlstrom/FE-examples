import { TestBed } from '@angular/core/testing';

import { MeasurementItemsService } from './measurement-items.service';

describe('MeasurementItemsService', () => {
  let service: MeasurementItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeasurementItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
