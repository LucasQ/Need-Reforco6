import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagListagemProfPortComponent } from './pag-listagem-prof-port.component';

describe('PagListagemProfPortComponent', () => {
  let component: PagListagemProfPortComponent;
  let fixture: ComponentFixture<PagListagemProfPortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagListagemProfPortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagListagemProfPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
