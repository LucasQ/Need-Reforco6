import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagAvaliacaoProfComponent } from './pag-avaliacao-prof.component';

describe('PagAvaliacaoProfComponent', () => {
  let component: PagAvaliacaoProfComponent;
  let fixture: ComponentFixture<PagAvaliacaoProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagAvaliacaoProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagAvaliacaoProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
