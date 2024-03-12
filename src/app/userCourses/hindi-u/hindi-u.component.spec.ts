import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HindiUComponent } from './hindi-u.component';

describe('HindiUComponent', () => {
  let component: HindiUComponent;
  let fixture: ComponentFixture<HindiUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HindiUComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HindiUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
