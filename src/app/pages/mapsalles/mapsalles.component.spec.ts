import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsallesComponent } from './mapsalles.component';

describe('MapsallesComponent', () => {
  let component: MapsallesComponent;
  let fixture: ComponentFixture<MapsallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapsallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapsallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
