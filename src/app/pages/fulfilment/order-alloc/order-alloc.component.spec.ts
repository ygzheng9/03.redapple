import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAllocComponent } from './order-alloc.component';

describe('OrderAllocComponent', () => {
  let component: OrderAllocComponent;
  let fixture: ComponentFixture<OrderAllocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderAllocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderAllocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
