import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-akun',
  templateUrl: './akun.page.html',
  styleUrls: ['./akun.page.scss'],
})
export class AkunPage implements OnInit {

  constructor(private navCtrl: NavController) { }
  ngOnInit() {
  }
  goToLoginPage(){
    this.navCtrl.navigateForward('/login')
  }

}

