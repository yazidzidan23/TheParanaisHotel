import { Component } from '@angular/core'
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-beranda',
  templateUrl: './beranda.page.html',
  styleUrls: ['./beranda.page.scss'],
})
export class BerandaPage {
  rooms = [
    {
      id: 1,
      name: 'Kamar Deluxe',
      description: 'Kamar dengan pemandangan laut',
      price: 1000000,
      imageUrl: '/assets/img/room/room-1.jpg'
    },
    {
      id: 2,
      name: 'Kamar Superior',
      description: 'Kamar dengan pemandangan kota',
      price: 800000,
      imageUrl: 'assets/img/room/room-2.jpg'
    },
    {
      id: 3,
      name: 'Kamar Standar',
      description: 'Kamar nyaman dengan fasilitas standar',
      price: 600000,
      imageUrl: 'assets/img/room/room-3.jpg'
    }
  ];
  constructor(private navCtrl: NavController) { }
  goToReservation(roomId: number) {
    this.navCtrl.navigateForward(`/reservation/${roomId}`);
  }
}
