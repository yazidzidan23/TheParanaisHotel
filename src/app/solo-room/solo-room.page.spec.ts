import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoloRoomPage } from './solo-room.page';

describe('SoloRoomPage', () => {
  let component: SoloRoomPage;
  let fixture: ComponentFixture<SoloRoomPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloRoomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
