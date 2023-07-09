import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjektiMojiComponent } from './objekti-moji.component';

describe('ObjektiMojiComponent', () => {
  let component: ObjektiMojiComponent;
  let fixture: ComponentFixture<ObjektiMojiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjektiMojiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjektiMojiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
