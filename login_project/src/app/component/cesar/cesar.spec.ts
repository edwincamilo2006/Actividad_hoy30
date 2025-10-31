import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cesar } from './cesar';

describe('Cesar', () => {
  let component: Cesar;
  let fixture: ComponentFixture<Cesar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cesar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cesar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
