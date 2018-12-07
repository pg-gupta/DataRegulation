import { TestBed, inject } from '@angular/core/testing';

import { DocService } from './doc.service';

describe('Docervice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocService]
    });
  });

  it('should be created', inject([DocService], (service: ListService) => {
    expect(service).toBeTruthy();
  }));
});
