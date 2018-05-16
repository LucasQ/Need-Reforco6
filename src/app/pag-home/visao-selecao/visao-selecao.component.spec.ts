import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaoSelecaoComponent } from './visao-selecao.component';

describe('VisaoSelecaoComponent', () => {
  let component: VisaoSelecaoComponent;
  let fixture: ComponentFixture<VisaoSelecaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisaoSelecaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaoSelecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
