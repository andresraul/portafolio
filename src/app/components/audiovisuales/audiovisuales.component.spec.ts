import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiovisualesComponent } from './audiovisuales.component';

describe('AudiovisualesComponent', () => {
  let component: AudiovisualesComponent;
  let fixture: ComponentFixture<AudiovisualesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudiovisualesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiovisualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
