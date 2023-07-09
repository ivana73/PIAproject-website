import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjektiMojiDetailsComponent } from './objekti-moji-details.component';

describe('ObjektiMojiDetailsComponent', () => {
  let component: ObjektiMojiDetailsComponent;
  let fixture: ComponentFixture<ObjektiMojiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjektiMojiDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjektiMojiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
