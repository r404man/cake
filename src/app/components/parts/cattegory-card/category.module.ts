import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CattegoryCardComponent } from './cattegory-card.component';

@NgModule({
    declarations: [
        // ExampleComponent,
        CattegoryCardComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        // ExampleComponent,
        CattegoryCardComponent
    ]
})
export class CategoryModule { }