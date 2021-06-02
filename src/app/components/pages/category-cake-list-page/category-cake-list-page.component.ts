import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cake } from 'src/app/interfaces/cake';
import { Category } from 'src/app/interfaces/category';
import { CakeService } from 'src/app/services/cake.service';

@Component({
  selector: 'app-category-cake-list-page',
  templateUrl: './category-cake-list-page.component.html',
  styleUrls: ['./category-cake-list-page.component.scss']
})
export class CategoryCakeListPageComponent implements OnInit {
  categoryCakes = [];
  currentCategory: string = null;
  allert: string = null;

  constructor(private cakeService: CakeService, private route: ActivatedRoute) { }

  getCategoryCakes() {
    this.cakeService.getCakes().subscribe(
      data => {
        data.map((val) => {
          let item = { docId: val.payload.doc.id, ...val.payload.doc.data() as Cake };
          if (this.currentCategory === item.category) {
            this.categoryCakes.push(item);
          } else {
            return;
          }
        })
      // this.categoryCakes = data.filter((val) => {
        //   let item = val.payload.doc.data() as Cake;
        //   // let item = { docId: val.payload.doc.id, ...val.payload.doc.data() as Cake };
        //   if (item.category === this.currentCategory) {
        //     return {
        //       docId: val.payload.doc.id,
        //       ...val.payload.doc.data() as Cake
        //     };
        //   }
        // })
        // console.log(this.categoryCakes.length);

        if(this.categoryCakes.length === 0 ) {
          this.allert = 'По данной категории торты еще не созданы!'
        }

        // this.categoryCakes = data.map((val) => {
        //   let item = { docId: val.payload.doc.id, ...val.payload.doc.data() as Cake };
        //   if (item.category === this.currentCategory) {
        //     return item
        //   }
        // })
        // if (this.categoryCakes != null) {
        //   console.log(this.categoryCakes);
        //   for (let i = 0; i < this.categoryCakes.length; i++) {
        //     if (this.categoryCakes[i] === undefined) {
        //       this.categoryCakes = null;
        //       this.allert = 'Торты по данной категории еще не добавлены!'
        //     }
        //   }
        // } else {
        // }

      }
    )
  }

  getCurrentCategory() {
    let id = this.route.snapshot.paramMap.get('categoryId');
    this.cakeService.getCategory(id).subscribe(
      (val) => {
        let item;
        item = val.data() as Category;
        this.currentCategory = item.title;
        if (this.currentCategory != null) {
          this.getCategoryCakes();
        }
      }

    )
  }

  ngOnInit(): void {
    this.getCurrentCategory();
  }
  ngOnDestroy() {
    this.currentCategory = null;
  }

}
