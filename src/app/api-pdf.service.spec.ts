import { TestBed } from '@angular/core/testing';

import { ApiPdfService } from './api-pdf.service';

describe('ApiPdfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiPdfService = TestBed.get(ApiPdfService);
    expect(service).toBeTruthy();
  });
});
