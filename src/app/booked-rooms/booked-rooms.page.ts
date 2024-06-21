import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booked-rooms',
  templateUrl: './booked-rooms.page.html',
  styleUrls: ['./booked-rooms.page.scss'],
})
export class BookedRoomsPage implements OnInit {
  bookedRooms: any[] = [
    {
      id: 1,
      name: 'Kamar Deluxe',
      description: 'Kamar dengan pemandangan laut',
      price: 1000000,
      checkInDate: '2023-06-20',
      checkOutDate: '2023-06-22',
      imageUrl: 'assets/img/room/room-1.jpg'
    },
    {
      id: 2,
      name: 'Kamar Superior',
      description: 'Kamar dengan pemandangan kota',
      price: 800000,
      checkInDate: '2023-07-10',
      checkOutDate: '2023-07-12',
      imageUrl: 'assets/img/room/room-2.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
