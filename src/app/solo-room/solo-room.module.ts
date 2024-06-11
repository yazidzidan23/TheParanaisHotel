import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoloRoomPageRoutingModule } from './solo-room-routing.module';

import { SoloRoomPage } from './solo-room.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoloRoomPageRoutingModule
  ],
  declarations: [SoloRoomPage]
})
export class SoloRoomPageModule {}
