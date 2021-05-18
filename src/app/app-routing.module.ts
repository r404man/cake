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

const routes: Routes = [
  { path: 'main', component: MainPageComponent, data: { animation: 'MainPage' } },
  {
    path: 'main/:categoryId', component: CategoryCakeListPageComponent, children: [
      // { path: ':cakeId', component: CakeDetailPageComponent, pathMatch: 'full' },
    ],
  },
  { path: 'main/:categoryId/:cakeId', component: CakeDetailPageComponent },
  // { path: '/:cakeId', component: CakeDetailComponent },
  { path: 'components', component: CompntsComponent, data: { animation: 'PartsPage' } },
  { path: 'callback', component: CallbackComponent, data: { animation: 'CallBackPage' } },
  { path: 'contacts', component: ContactsComponent, data: { animation: 'ContactsPage' } },
  {
    path: 'admin', loadChildren: () => import('../app/components/pages/admin-page/admin.module')
      .then(m => m.AdminModule)
  },
  { path: '**', redirectTo: '/main' },
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
