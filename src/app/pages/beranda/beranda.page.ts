import { Component } from '@angular/core'
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-beranda',
  templateUrl: './beranda.page.html',
  styleUrls: ['./beranda.page.scss'],
})
export class BerandaPage {

  constructor(private navCtrl: NavController) { }

  goToRooms() {
    this.navCtrl.navigateForward('/rooms');
  }
  goBack() {
    this.navCtrl.back();
  }
}
