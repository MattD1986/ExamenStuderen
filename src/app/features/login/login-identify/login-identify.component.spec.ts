import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginIdentifyComponent } from './login-identify.component';

describe('LoginIdentifyComponent', () => {
  let component: LoginIdentifyComponent;
  let fixture: ComponentFixture<LoginIdentifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginIdentifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginIdentifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
