/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppGlobalService } from './app-global.service';

describe('Service: AppGlobal', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppGlobalService]
    });
  });

  it('should ...', inject([AppGlobalService], (service: AppGlobalService) => {
    expect(service).toBeTruthy();
  }));
});
