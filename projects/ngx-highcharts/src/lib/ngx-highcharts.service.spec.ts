import { TestBed } from '@angular/core/testing';

import { NgxHighchartsService } from './ngx-highcharts.service';

describe('NgxHighchartsService', () => {
  let service: NgxHighchartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxHighchartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
