import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BContainerComponent } from './b-container.component';

describe('BContainerComponent', () => {
  let component: BContainerComponent;
  let fixture: ComponentFixture<BContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
