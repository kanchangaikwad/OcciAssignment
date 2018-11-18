import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieBankComponent } from './movie-bank.component';

describe('MovieBankComponent', () => {
  let component: MovieBankComponent;
  let fixture: ComponentFixture<MovieBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
