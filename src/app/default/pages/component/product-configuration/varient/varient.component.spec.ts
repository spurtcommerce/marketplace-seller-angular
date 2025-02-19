import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarientComponent } from './varient.component';

describe('VarientComponent', () => {
  let component: VarientComponent;
  let fixture: ComponentFixture<VarientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
