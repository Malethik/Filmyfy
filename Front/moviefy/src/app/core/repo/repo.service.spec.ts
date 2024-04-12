import { TestBed } from '@angular/core/testing';

import { ServerService } from './repo.service';

describe('RepoService', () => {
  let service: ServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
