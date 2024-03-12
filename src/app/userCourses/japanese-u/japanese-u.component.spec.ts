import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JapaneseUComponent } from './japanese-u.component';

describe('JapaneseUComponent', () => {
  let component: JapaneseUComponent;
  let fixture: ComponentFixture<JapaneseUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JapaneseUComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JapaneseUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
