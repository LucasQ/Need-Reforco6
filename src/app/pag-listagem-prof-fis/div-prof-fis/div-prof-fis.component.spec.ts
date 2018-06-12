import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivProfFisComponent } from './div-prof-fis.component';

describe('DivProfFisComponent', () => {
  let component: DivProfFisComponent;
  let fixture: ComponentFixture<DivProfFisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivProfFisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivProfFisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
