import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage {
  selectedPaymentMethod: string | undefined;

  constructor(private alertController: AlertController) { }

  async makePayment() {
    switch (this.selectedPaymentMethod) {
      case 'card':
        this.processCardPayment();
        break;
      case 'dana':
        this.processDanaPayment();
        break;
      case 'gopay':
        this.processGopayPayment();
        break;
      case 'bank':
        this.processBankPayment();
        break;
      default:
        alert('Silakan pilih metode pembayaran.');
    }
  }

  async showSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Pembayaran Berhasil',
      message: 'Pembayaran Anda telah berhasil diproses.',
      buttons: ['OK']
    });
    await alert.present();
  }

  processCardPayment() {
    // Logika untuk memproses pembayaran dengan kartu kredit/debit
    this.showSuccessAlert();
  }

  processDanaPayment() {
    // Logika untuk memproses pembayaran dengan DANA
    this.showSuccessAlert();
  }

  processGopayPayment() {
    // Logika untuk memproses pembayaran dengan GoPay
    this.showSuccessAlert();
  }

  processBankPayment() {
    // Logika untuk memproses pembayaran dengan transfer bank
    this.showSuccessAlert();
  }
}
