import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivProfComponent } from './div-prof.component';

describe('DivProfComponent', () => {
  let component: DivProfComponent;
  let fixture: ComponentFixture<DivProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
