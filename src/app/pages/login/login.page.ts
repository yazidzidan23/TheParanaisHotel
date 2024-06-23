import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login = {
  email: "",
  password: "",
  };
  type: boolean = true;
  constructor(private router : Router) { }

  ngOnInit():void {
    
  }
  changeType() {
    this.type = !this.type;    
  }
  goToBeranda() {
    console.log(this.login); 
    this.router.navigate(['/tabs/beranda']);
  }
  goToForget() {
    console.log("Forget");
    this.router.navigate(['/forgot-password']);
  }
  gmailLogin() {
    console.log("Gmail");
    this.router.navigate(['setting']);
  }
  goToRegister() {
    this.router.navigate(['register']);
  }
}
