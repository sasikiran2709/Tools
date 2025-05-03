import { TestBed } from '@angular/core/testing';

import { ToolformatsService } from './toolformats.service';

describe('ToolformatsService', () => {
  let service: ToolformatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolformatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
