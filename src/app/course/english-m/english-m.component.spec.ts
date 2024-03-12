import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishMComponent } from './english-m.component';

describe('EnglishMComponent', () => {
  let component: EnglishMComponent;
  let fixture: ComponentFixture<EnglishMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnglishMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
