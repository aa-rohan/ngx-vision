import { TestBed } from '@angular/core/testing';

import { NgxVisionService } from './ngx-vision.service';

describe('NgxVisionService', () => {
  let service: NgxVisionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxVisionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
