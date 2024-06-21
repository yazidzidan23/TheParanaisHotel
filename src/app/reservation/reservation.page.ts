import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {
  roomId: number | undefined;
  roomDetails: any;

  rooms = [
    { id: 1, name: 'Kamar Deluxe', description: 'Kamar dengan pemandangan laut', price: 1000000, imageUrl: 'assets/img/room/room-1.jpg' },
    { id: 2, name: 'Kamar Superior', description: 'Kamar dengan pemandangan kota', price: 800000, imageUrl: 'assets/img/room/room-2.jpg' },
    { id: 3, name: 'Kamar Standar', description: 'Kamar nyaman dengan fasilitas standar', price: 600000, imageUrl: 'assets/img/room/room-3.jpg' }
  ];

  constructor(private route: ActivatedRoute, private navCtrl: NavController) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
  if (id && !isNaN(+id)) {
    this.roomId = +id;
    this.roomDetails = this.rooms.find(room => room.id === this.roomId);
  } else {
    console.error('Invalid id parameter:', id);
  }
}
goToPayment() {
  this.navCtrl.navigateForward('/payment')
}
}
