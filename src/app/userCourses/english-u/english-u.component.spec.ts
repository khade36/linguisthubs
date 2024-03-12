import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishUComponent } from './english-u.component';

describe('EnglishUComponent', () => {
  let component: EnglishUComponent;
  let fixture: ComponentFixture<EnglishUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishUComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnglishUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
