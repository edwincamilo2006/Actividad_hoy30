import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Edwin } from './edwin';

describe('Edwin', () => {
  let component: Edwin;
  let fixture: ComponentFixture<Edwin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Edwin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Edwin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
