import { TestBed } from '@angular/core/testing';

import { ContactSrv } from './contact-srv';

describe('ContactSrv', () => {
  let service: ContactSrv;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactSrv);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
