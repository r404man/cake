import { Component, Input, OnInit } from '@angular/core';
import { CakeService } from 'src/app/services/cake.service';

@Component({
  selector: 'app-main-category-card',
  templateUrl: './main-category-card.component.html',
  styleUrls: ['./main-category-card.component.scss']
})
export class MainCategoryCardComponent implements OnInit {
@Input() category;

  thumbUrl;

  constructor(private cakeService: CakeService) { }

  getThumb() {
    this.cakeService.getCategoryThumb(this.category.id).subscribe(
      data => {
        this.thumbUrl = data;
      }
    )
  }

  ngOnInit(): void {
    this.getThumb();
  }

}
