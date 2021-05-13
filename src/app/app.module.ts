import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/parts/navigation-bar/navigation-bar.component';
import { CattegoryCardComponent } from './components/parts/cattegory-card/cattegory-card.component';
import { CakeCardComponent } from './components/parts/cake-card/cake-card.component';
import { CakeDetailComponent } from './components/pages/cake-detail/cake-detail.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { HeaderComponent } from './components/parts/header/header.component';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { AppRoutingModule } from './app-routing.module';
import { CallbackComponent } from './components/pages/callback/callback.component';
import { CompntsComponent } from './components/pages/compnts/compnts.component';
import { FooterComponent } from './components/parts/footer/footer.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MainSliderComponent } from './components/parts/main-slider/main-slider.component';

import { NgxUsefulSwiperModule } from 'ngx-useful-swiper'


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    CattegoryCardComponent,
    CakeCardComponent,
    CakeDetailComponent,
    ContactsComponent,
    HeaderComponent,
    MainPageComponent,
    CallbackComponent,
    CompntsComponent,
    FooterComponent,
    MainSliderComponent,
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    NgxUsefulSwiperModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
