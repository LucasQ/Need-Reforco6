import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagListagemProfFisComponent } from './pag-listagem-prof-fis.component';

describe('PagListagemProfFisComponent', () => {
  let component: PagListagemProfFisComponent;
  let fixture: ComponentFixture<PagListagemProfFisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagListagemProfFisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagListagemProfFisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
