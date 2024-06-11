import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beranda',
  templateUrl: './beranda.page.html',
  styleUrls: ['./beranda.page.scss'],
})
export class BerandaPage {
  rooms = [
    {
      name: 'Deluxe Room',
      description: 'A luxurious room with a king-sized bed, sea view, and a private balcony.',
      price: 150,
      image: 'assets/img/deluxe-room.jpg'
    },
    {
      name: 'Standard Room',
      description: 'A comfortable room with a queen-sized bed and a garden view.',
      price: 100,
      image: 'assets/img/standard-room.jpg'
    },
    {
      name: 'Suite',
      description: 'An elegant suite with a separate living area, kitchenette, and a city view.',
      price: 250,
      image: 'assets/img/suite.jpg'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToReservation(){
    this.router.navigate(['./reservation']);
  }
}
