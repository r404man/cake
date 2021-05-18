import { Component, OnInit } from '@angular/core';
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
  categoryCakes: Object[] = null;
  currentCategory: string = null;
  allert: string = null;

  constructor(private cakeService: CakeService, private route: ActivatedRoute) { }

  getCategoryCakes() {
    this.cakeService.getCakes().subscribe(
      data => {
        this.categoryCakes = data.map((val) => {
          let item = { docId: val.payload.doc.id, ...val.payload.doc.data() as Cake };
          if (item.category === this.currentCategory) {
            return item
          } else {
            return
          }
        })
        for (let i = 0; i < this.categoryCakes.length; i++) {
          if (this.categoryCakes[i] === undefined) {
            this.categoryCakes = null;
            this.allert = 'Торты по данной категории еще не добавлены!'
          }
        }

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
      },
    )
  }

  ngOnInit(): void {
    this.getCurrentCategory();
    this.getCategoryCakes();
  }

}
