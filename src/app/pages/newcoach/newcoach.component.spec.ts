import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcoachComponent } from './newcoach.component';

describe('NewcoachComponent', () => {
  let component: NewcoachComponent;
  let fixture: ComponentFixture<NewcoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewcoachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewcoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
