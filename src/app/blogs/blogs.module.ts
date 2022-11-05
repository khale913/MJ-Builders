import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { HowToSpotWaterDamageComponent } from './how-to-spot-water-damage/how-to-spot-water-damage.component';


@NgModule({
  declarations: [
    BlogsComponent,
    HowToSpotWaterDamageComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule
  ]
})
export class BlogsModule { }
