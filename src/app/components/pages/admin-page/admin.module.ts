import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { AuthComponent } from '../auth/auth.component';
import { CakeCategoryComponent } from '../cake-category/cake-category.component';
import { CakeCreateComponent } from '../cake-create/cake-create.component';
import { FormsModule } from '@angular/forms';
import { AdminPageComponent } from './admin-page.component';
import { CmpCreateComponent } from '../cmp-create/cmp-create.component';
import { CattegoryCardComponent } from '../../parts/cattegory-card/cattegory-card.component';
import { TempLoadComponent } from '../../parts/temp-load/temp-load.component';
import { CakeCardComponent } from '../../parts/cake-card/cake-card.component';
import { CategoryModule } from '../../parts/cattegory-card/category.module';

const routing = RouterModule.forChild([
  { path: 'auth', component: AuthComponent },
  {
    path: 'main', component: AdminPageComponent, children: [
      { path: 'cake-category-create', component: CakeCategoryComponent },
      { path: 'cake-create', component: CakeCreateComponent },
      { path: 'cmp-create', component: CmpCreateComponent },
    ]
  },
  { path: '**', redirectTo: '/admin/auth' }
])

@NgModule({
  declarations: [
    AuthComponent,
    // CattegoryCardComponent,
    CakeCategoryComponent,
    CakeCreateComponent,
    AdminPageComponent,
    TempLoadComponent,
    CakeCardComponent,
  ],
  imports: [
    CategoryModule,
    CommonModule,
    FormsModule,
    routing,
  ],
  exports: []
})
export class AdminModule { }
