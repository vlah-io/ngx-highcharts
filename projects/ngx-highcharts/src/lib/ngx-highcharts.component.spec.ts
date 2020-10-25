import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxHighchartsComponent } from './ngx-highcharts.component';

describe('NgxHighchartsComponent', () => {
  let component: NgxHighchartsComponent;
  let fixture: ComponentFixture<NgxHighchartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxHighchartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxHighchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
