import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bryan } from './bryan';

describe('Bryan', () => {
  let component: Bryan;
  let fixture: ComponentFixture<Bryan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bryan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bryan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
