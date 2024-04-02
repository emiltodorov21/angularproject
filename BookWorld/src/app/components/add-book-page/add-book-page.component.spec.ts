import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookPageComponent } from './add-book-page.component';

describe('AddBookPageComponent', () => {
  let component: AddBookPageComponent;
  let fixture: ComponentFixture<AddBookPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBookPageComponent]
    });
    fixture = TestBed.createComponent(AddBookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
