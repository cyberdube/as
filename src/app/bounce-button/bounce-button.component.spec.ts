import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BounceButtonComponent } from './bounce-button.component';

describe('BounceButtonComponent', () => {
  let component: BounceButtonComponent;
  let fixture: ComponentFixture<BounceButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BounceButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BounceButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
