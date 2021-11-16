import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupcontentComponent } from './popupcontent.component';

describe('PopupcontentComponent', () => {
  let component: PopupcontentComponent;
  let fixture: ComponentFixture<PopupcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
