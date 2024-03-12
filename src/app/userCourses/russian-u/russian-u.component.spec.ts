import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RussianUComponent } from './russian-u.component';

describe('RussianUComponent', () => {
  let component: RussianUComponent;
  let fixture: ComponentFixture<RussianUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RussianUComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RussianUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
