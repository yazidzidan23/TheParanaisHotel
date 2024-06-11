import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
// import { ReservationPageModule } from './reservation.module';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage {

  checkInDate: string | undefined;
  checkOutDate: string | undefined;
  numberOfGuests: number | undefined;
  selectedRoomType: string | undefined;

  constructor(private alertController: AlertController) {}

  async reserveRoom() {
    if (!this.checkInDate || !this.checkOutDate || !this.numberOfGuests || !this.selectedRoomType) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Please fill in all fields.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    // Proses reservasi kamar
    const alert = await this.alertController.create({
      header: 'Reservation Success',
      message: 'Your room has been reserved. Check your email for confirmation.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
