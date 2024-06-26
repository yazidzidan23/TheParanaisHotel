import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookedRoomsPageRoutingModule } from './booked-rooms-routing.module';

import { BookedRoomsPage } from './booked-rooms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookedRoomsPageRoutingModule
  ],
  declarations: [BookedRoomsPage]
})
export class BookedRoomsPageModule {}
