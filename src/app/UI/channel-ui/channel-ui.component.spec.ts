import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelUIComponent } from './channel-ui.component';

describe('ChannelUIComponent', () => {
  let component: ChannelUIComponent;
  let fixture: ComponentFixture<ChannelUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
