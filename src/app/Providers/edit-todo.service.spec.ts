import { TestBed, inject } from '@angular/core/testing';

import { EditTodoService } from './edit-todo.service';

describe('EditTodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditTodoService]
    });
  });

  it('should be created', inject([EditTodoService], (service: EditTodoService) => {
    expect(service).toBeTruthy();
  }));
});
