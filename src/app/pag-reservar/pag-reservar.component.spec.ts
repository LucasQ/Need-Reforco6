import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagReservarComponent } from './pag-reservar.component';

describe('PagReservarComponent', () => {
  let component: PagReservarComponent;
  let fixture: ComponentFixture<PagReservarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagReservarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagReservarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
