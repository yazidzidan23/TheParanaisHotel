import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReservationPage } from './reservation.page';

describe('HomePage', () => {
  let component: ReservationPage;
  let fixture: ComponentFixture<ReservationPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the title set', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('ion-title').textContent).toContain('Hotel Reservation');
  });

  it('should initialize with empty input fields', () => {
    expect(component.checkInDate).toBeUndefined();
    expect(component.checkOutDate).toBeUndefined();
    expect(component.numberOfGuests).toBeUndefined();
    expect(component.selectedRoomType).toBeUndefined();
  });

  it('should render input fields and button', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('ion-datetime')).toBeTruthy();
    expect(compiled.querySelector('ion-input')).toBeTruthy();
    expect(compiled.querySelector('ion-select')).toBeTruthy();
    expect(compiled.querySelector('ion-button')).toBeTruthy();
  });

  // Add more tests as needed
});
