import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KycUploadDocumentComponent } from './kyc-upload-document.component';

describe('KycUploadDocumentComponent', () => {
  let component: KycUploadDocumentComponent;
  let fixture: ComponentFixture<KycUploadDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KycUploadDocumentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KycUploadDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
