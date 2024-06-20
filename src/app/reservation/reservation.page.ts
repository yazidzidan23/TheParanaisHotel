import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage { 

  constructor(private navCtrl: NavController) { }

  goBack(): void {
    this.navCtrl.back();
  }
  roomId: number | null=null;
}
