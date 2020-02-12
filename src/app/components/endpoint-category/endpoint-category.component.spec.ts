import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndpointCategoryComponent } from './endpoint-category.component';

describe('EndpointCategoryComponent', () => {
  let component: EndpointCategoryComponent;
  let fixture: ComponentFixture<EndpointCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndpointCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndpointCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
