import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TabsComponent } from 'src/app/components/tabs/tabs.component';
import { HeaderComponent } from 'src/app/components/header/header.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

    HomePageRoutingModule
  ],
  declarations: [HomePage, TabsComponent, HeaderComponent],
  entryComponents: [TabsComponent],
})
export class HomePageModule { }
