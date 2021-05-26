import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { CategoryModule } from './components/parts/cattegory-card/category.module'

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
import { CmpCreateComponent } from './components/pages/cmp-create/cmp-create.component';
import { CallbackFormComponent } from './components/parts/callback-form/callback-form.component';
import { MainSliderComponent } from './components/parts/main-slider/main-slider.component';
import { TempLoadComponent } from './components/parts/temp-load/temp-load.component';
import { MainCategoryCardComponent } from './components/parts/main-category-card/main-category-card.component';
import { CakeDetailPageComponent } from './components/pages/cake-detail-page/cake-detail-page.component';
import { CategoryCakeListPageComponent } from './components/pages/category-cake-list-page/category-cake-list-page.component';
import { MainCakeCardComponent } from './components/parts/main-cake-card/main-cake-card.component';
import { OfferFormComponent } from './components/parts/offer-form/offer-form.component';
import { OffersPageComponent } from './components/pages/offers-page/offers-page.component';
import { OfferCakeInfoComponent } from './components/parts/offer-cake-info/offer-cake-info.component';
import { InfoPageComponent } from './components/pages/info-page/info-page.component';

// import { AdminModule } from './components/pages/admin-page/admin.module';
// import { AdminPageComponent } from './components/pages/admin-page/admin-page.component';
// import { AuthComponent } from './components/pages/auth/auth.component'
// import { AdminPageComponent } from './components/pages/admin-page/admin-page.component';
// import { CakeCategoryComponent } from './components/pages/cake-category/cake-category.component';
// import { AdminNavigationBarComponent } from './components/parts/admin-navigation-bar/admin-navigation-bar.component';
// import { CakeCreateComponent } from './components/pages/cake-create/cake-create.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    // CakeCardComponent,
    // CakeDetailComponent,
    ContactsComponent,
    HeaderComponent,
    MainPageComponent,
    CallbackComponent,
    CompntsComponent,
    FooterComponent,
    MainSliderComponent,
    CallbackFormComponent,
    CmpCreateComponent,
    MainCategoryCardComponent,
    CakeDetailPageComponent,
    CategoryCakeListPageComponent,
    MainCakeCardComponent,
    OfferFormComponent,
    OffersPageComponent,
    OfferCakeInfoComponent,
    InfoPageComponent,
    // CakeDetailComponent,
    // TempLoadComponent,

    // CattegoryCardComponent,
    // AdminPageComponent
    // AdminPageComponent,
    // AuthComponent,
    // CakeCategoryComponent,
    // AdminNavigationBarComponent,
    // CakeCreateComponent ,
  ],
  imports: [
    BrowserAnimationsModule,
    CategoryModule,
    BrowserModule,
    GoogleMapsModule,
    NgxUsefulSwiperModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
