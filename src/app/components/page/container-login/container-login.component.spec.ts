import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerLoginComponent } from './container-login.component';

describe('ContainerLoginComponent', () => {
  let component: ContainerLoginComponent;
  let fixture: ComponentFixture<ContainerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
