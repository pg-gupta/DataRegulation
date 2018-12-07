import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDocComponent } from './search-doc.component';

describe('AddListComponent', () => {
  let component: AddListComponent;
  let fixture: ComponentFixture<AddListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
