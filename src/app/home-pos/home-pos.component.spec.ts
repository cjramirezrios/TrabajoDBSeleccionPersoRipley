import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePosComponent } from './home-pos.component';

describe('HomePosComponent', () => {
  let component: HomePosComponent;
  let fixture: ComponentFixture<HomePosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
