import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagListagemProfQuiComponent } from './pag-listagem-prof-qui.component';

describe('PagListagemProfQuiComponent', () => {
  let component: PagListagemProfQuiComponent;
  let fixture: ComponentFixture<PagListagemProfQuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagListagemProfQuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagListagemProfQuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
