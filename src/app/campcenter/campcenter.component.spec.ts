import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampcenterComponent } from './campcenter.component';

describe('CampcenterComponent', () => {
  let component: CampcenterComponent;
  let fixture: ComponentFixture<CampcenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampcenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
