import { TestBed } from '@angular/core/testing';

import { AudiovisualesService } from './audiovisuales.service';

describe('AudiovisualesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AudiovisualesService = TestBed.get(AudiovisualesService);
    expect(service).toBeTruthy();
  });
});
