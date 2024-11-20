import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDataCompComponent } from './show-data-comp.component';

describe('ShowDataCompComponent', () => {
  let component: ShowDataCompComponent;
  let fixture: ComponentFixture<ShowDataCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowDataCompComponent]
    });
    fixture = TestBed.createComponent(ShowDataCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
