import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDangKiComponent } from './form-dang-ki.component';

describe('FormDangKiComponent', () => {
  let component: FormDangKiComponent;
  let fixture: ComponentFixture<FormDangKiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDangKiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDangKiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
