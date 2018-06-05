import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivProfPortComponent } from './div-prof-port.component';

describe('DivProfPortComponent', () => {
  let component: DivProfPortComponent;
  let fixture: ComponentFixture<DivProfPortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivProfPortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivProfPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
