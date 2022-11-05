import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs.component';
import { HowToSpotWaterDamageComponent } from './how-to-spot-water-damage/how-to-spot-water-damage.component';

const routes: Routes = [
  { path: '', component: BlogsComponent },
  { path: 'how-to-spot-water-damage', component: HowToSpotWaterDamageComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
