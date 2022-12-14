import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CareersComponent } from './careers/careers.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { BiohazardComponent } from './services/biohazard/biohazard.component';
import { CommercialServicesComponent } from './services/commercial-services/commercial-services.component';
import { FireDamageComponent } from './services/fire-damage/fire-damage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WaterDamageComponent } from './services/water-damage/water-damage.component';
import { VehicleDamageComponent } from './services/vehicle-damage/vehicle-damage.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'work', component: OurWorkComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'waterdmg', component: WaterDamageComponent },
  { path: 'firedmg', component: FireDamageComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'commercial', component: CommercialServicesComponent },
  { path: 'biohazard', component: BiohazardComponent },

  { path: 'vehicle-damage', component: VehicleDamageComponent },

  { path: 'privacy', component: PrivacyComponent },
  { path: 'blog', loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogsModule) },
  //Wild Card Route for 404 request
  {
    path: '**', pathMatch: 'full',
    component: PagenotfoundComponent
  },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {
  //   initialNavigation: 'enabledBlocking'
  // })],
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
