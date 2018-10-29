import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneTransactionComponent } from './one-transaction.component';

describe('OneTransactionComponent', () => {
  let component: OneTransactionComponent;
  let fixture: ComponentFixture<OneTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
