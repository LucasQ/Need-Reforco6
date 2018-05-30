import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagListagemProfComponent } from './pag-listagem-prof.component';

describe('PagListagemProfComponent', () => {
  let component: PagListagemProfComponent;
  let fixture: ComponentFixture<PagListagemProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagListagemProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagListagemProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
