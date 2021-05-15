import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { CakeService } from 'src/app/services/cake.service';

@Component({
  selector: 'app-cattegory-card',
  templateUrl: './cattegory-card.component.html',
  styleUrls: ['./cattegory-card.component.scss']
})
export class CattegoryCardComponent implements OnInit {
  @Input() item;

  categoryThumbUrl: string = null;

  constructor(private categoryService: CakeService) { }


  getThumb() {
    this.categoryService.getCategoryThumb(this.item.id).subscribe(
      data => {
        this.categoryThumbUrl = data;
      }
    )
  }

  categoryDelete(id: string) {
    console.log(id)
    this.categoryService.deleteCategory(id);
  }

  ngOnInit(): void {
    this.getThumb();
  }

}
