import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeregistrovaniUserComponent } from './neregistrovani-user.component';

describe('NeregistrovaniUserComponent', () => {
  let component: NeregistrovaniUserComponent;
  let fixture: ComponentFixture<NeregistrovaniUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeregistrovaniUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeregistrovaniUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
