import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioniceDetailsComponent } from './radionice-details.component';

describe('RadioniceDetailsComponent', () => {
  let component: RadioniceDetailsComponent;
  let fixture: ComponentFixture<RadioniceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioniceDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioniceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
