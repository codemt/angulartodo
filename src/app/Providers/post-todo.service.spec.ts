import { TestBed, inject } from '@angular/core/testing';

import { PostTodoService } from './post-todo.service';

describe('PostTodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostTodoService]
    });
  });

  it('should be created', inject([PostTodoService], (service: PostTodoService) => {
    expect(service).toBeTruthy();
  }));
});
