import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CountdownModule } from 'ngx-countdown';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { DateRangePickerComponent } from './date-range-picker/date-range-picker.component';
import { EditOfferComponent } from './edit-offer/edit-offer.component';
import { FiltersComponent } from './filters/filters.component';
import { FooterComponent } from './footer/footer.component';
import { IndexOffersComponent } from './index-offers/index-offers.component';
import { LoginComponent } from './login/login.component';
import { MapsComponent } from './maps/maps.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { OfferCardComponent } from './offer-card/offer-card.component';
import { OfferCardAdminComponent } from './offer-card-admin/offer-card-admin.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { OfferPageComponent } from './offer-page/offer-page.component';
import { RegisterComponent } from './register/register.component';
import { SearchOfferComponent } from './search-offer/search-offer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CreateOfferComponent,
    DateRangePickerComponent,
    EditOfferComponent,
    FiltersComponent,
    FooterComponent,
    IndexOffersComponent,
    LoginComponent,
    MapsComponent,
    NavigationBarComponent,
    OfferCardComponent,
    OfferCardAdminComponent,
    OfferListComponent,
    OfferPageComponent,
    RegisterComponent,
    SearchOfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountdownModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
