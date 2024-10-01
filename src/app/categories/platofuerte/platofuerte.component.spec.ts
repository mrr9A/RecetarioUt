import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatofuerteComponent } from './platofuerte.component';

describe('PlatofuerteComponent', () => {
  let component: PlatofuerteComponent;
  let fixture: ComponentFixture<PlatofuerteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatofuerteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatofuerteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
