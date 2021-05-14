import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { AuthComponent } from '../auth/auth.component';
import { CakeCategoryComponent } from '../cake-category/cake-category.component';
import { CakeCreateComponent } from '../cake-create/cake-create.component';
import { FormsModule } from '@angular/forms';
import { AdminPageComponent } from './admin-page.component';

const routing = RouterModule.forChild([
  { path: 'auth', component: AuthComponent },
  {
    path: 'main', component: AdminPageComponent, children: [
      { path: 'cake-category-create', component: CakeCategoryComponent },
      { path: 'cake-create', component: CakeCreateComponent },
      { path: '**', component: AuthComponent }
    ]
  },
])

@NgModule({
  declarations: [
    AuthComponent,
    CakeCategoryComponent,
    CakeCategoryComponent,
    AdminPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    routing,
  ],
  exports: []
})
export class AdminModule { }
