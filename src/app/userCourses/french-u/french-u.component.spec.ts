import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrenchUComponent } from './french-u.component';

describe('FrenchUComponent', () => {
  let component: FrenchUComponent;
  let fixture: ComponentFixture<FrenchUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrenchUComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrenchUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
