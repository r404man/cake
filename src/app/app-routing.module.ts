import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { CompntsComponent } from './components/pages/compnts/compnts.component';
import { CallbackComponent } from './components/pages/callback/callback.component';

const routes: Routes = [
  { path: 'main', component: MainPageComponent },
  // {path: 'main/:categoryId', component}
  { path: 'components', component: CompntsComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'contacts', component: ContactsComponent },
  {
    path: 'admin', loadChildren: () => import('../app/components/pages/admin-page/admin.module')
      .then(m => m.AdminModule)
  },
  { path: '**', redirectTo: '/main' },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
