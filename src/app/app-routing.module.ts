import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { CompntsComponent } from './components/pages/compnts/compnts.component';
import { CallbackComponent } from './components/pages/callback/callback.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryCakeListPageComponent } from './components/pages/category-cake-list-page/category-cake-list-page.component';
// import { CakeDetailComponent } from './components/pages/cake-detail/cake-detail.component';
import { CakeDetailPageComponent } from './components/pages/cake-detail-page/cake-detail-page.component';
import { InfoPageComponent } from './components/pages/info-page/info-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent, data: { animation: 'MainPage' } },
  {
    path: 'category/:categoryId', component: CategoryCakeListPageComponent, children: [
      // { path: ':cakeId', component: CakeDetailPageComponent, pathMatch: 'full' },
    ],
  },
  { path: 'category/:categoryId/:cakeId', component: CakeDetailPageComponent },
  // { path: '/:cakeId', component: CakeDetailComponent },
  { path: 'components', component: CompntsComponent, data: { animation: 'PartsPage' } },
  { path: 'callback', component: CallbackComponent, data: { animation: 'CallBackPage' } },
  { path: 'contacts', component: ContactsComponent, data: { animation: 'ContactsPage' } },
  { path: 'info', component: InfoPageComponent, data: { animation: 'ContactsPage' } },
  {
    path: 'admin', loadChildren: () => import('../app/components/pages/admin-page/admin.module')
      .then(m => m.AdminModule)
  },
  { path: '**', redirectTo: '/' },
]

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
