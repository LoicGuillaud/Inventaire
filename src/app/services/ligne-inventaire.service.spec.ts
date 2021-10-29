import { TestBed } from '@angular/core/testing';

import { LigneInventaireService } from './ligne-inventaire.service';

describe('LigneInventaireService', () => {
  let service: LigneInventaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LigneInventaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
