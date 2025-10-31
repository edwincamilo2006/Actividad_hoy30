import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alejandro } from './alejandro';

describe('Alejandro', () => {
  let component: Alejandro;
  let fixture: ComponentFixture<Alejandro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alejandro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Alejandro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
