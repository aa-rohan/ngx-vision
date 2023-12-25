import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxVisionComponent } from './ngx-vision.component';

describe('NgxVisionComponent', () => {
  let component: NgxVisionComponent;
  let fixture: ComponentFixture<NgxVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxVisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
