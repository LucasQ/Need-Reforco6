import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivProfQuiComponent } from './div-prof-qui.component';

describe('DivProfQuiComponent', () => {
  let component: DivProfQuiComponent;
  let fixture: ComponentFixture<DivProfQuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivProfQuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivProfQuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
