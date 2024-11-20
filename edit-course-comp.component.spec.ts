import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCourseCompComponent } from './edit-course-comp.component';

describe('EditCourseCompComponent', () => {
  let component: EditCourseCompComponent;
  let fixture: ComponentFixture<EditCourseCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCourseCompComponent]
    });
    fixture = TestBed.createComponent(EditCourseCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
