import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscationComponent } from './transcation.component';

describe('TranscationComponent', () => {
  let component: TranscationComponent;
  let fixture: ComponentFixture<TranscationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranscationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranscationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
