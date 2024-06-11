import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string='';
  password: string= '';

  constructor(private router: Router, private alertController: AlertController) {}

  async onLogin() {
    // Logika login sederhana
    if (this.email === 'user@example.com' && this.password === 'password') {
      this.router.navigate(['./tabs/beranda']);
    } else {
      const alert = await this.alertController.create({
        header: 'Login Failed',
        message: 'Invalid email or password.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
