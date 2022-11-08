import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { CareersComponent } from './careers/careers.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WaterDamageComponent } from './services/water-damage/water-damage.component';
import { FireDamageComponent } from './services/fire-damage/fire-damage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { QuoteBoxComponent } from './services/quote-box/quote-box.component';
import { BiohazardComponent } from './services/biohazard/biohazard.component';
import { CommercialServicesComponent } from './services/commercial-services/commercial-services.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { VehicleDamageComponent } from './services/vehicle-damage/vehicle-damage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    OurWorkComponent,
    CareersComponent,
    ContactUsComponent,
    WaterDamageComponent,
    FireDamageComponent,
    AboutUsComponent,
    QuoteBoxComponent,
    BiohazardComponent,
    CommercialServicesComponent,
    PrivacyComponent,
    VehicleDamageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    // BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
