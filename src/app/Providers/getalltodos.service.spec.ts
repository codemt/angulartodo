import { TestBed, inject } from '@angular/core/testing';

import { GetalltodosService } from './getalltodos.service';

describe('GetalltodosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetalltodosService]
    });
  });

  it('should be created', inject([GetalltodosService], (service: GetalltodosService) => {
    expect(service).toBeTruthy();
  }));
});
