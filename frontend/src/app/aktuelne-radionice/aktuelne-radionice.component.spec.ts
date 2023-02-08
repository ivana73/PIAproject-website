import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AktuelneRadioniceComponent } from './aktuelne-radionice.component';

describe('AktuelneRadioniceComponent', () => {
  let component: AktuelneRadioniceComponent;
  let fixture: ComponentFixture<AktuelneRadioniceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AktuelneRadioniceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AktuelneRadioniceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
