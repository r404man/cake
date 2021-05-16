import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { CakeService } from 'src/app/services/cake.service';
import { Category } from '../../../interfaces/category'

@Component({
  selector: 'app-cake-category',
  templateUrl: './cake-category.component.html',
  styleUrls: ['./cake-category.component.scss']
})
export class CakeCategoryComponent implements OnInit {

  constructor(private cakeService: CakeService) { }

  categories = [];
  categoryTitle: string;
  categoryThumbnail;
  percentage: number;


  category(form: NgForm) {
    let title = form.value.title;
    this.categoryTitle = title;
    this.categoryCreate();
  }

  categoryThumb(event) {
    let thumb = event.target.files[0];
    this.categoryThumbnail = thumb;
  }

  categoryCreate() {
    this.cakeService.createCategory(this.categoryTitle, this.categoryThumbnail);
    this.cakeService.percentage.subscribe(
      val => {
        this.percentage = val;
        if(val === 100) {
          this.getCategories();
        }
      }
    )
  }


  getCategories() {
    this.cakeService.getCategories().subscribe(
      data => {
        // console.log(data);
        // console.log(this.categories);
        this.categories = data.map((val) => {
          return {
            docId: val.payload.doc.id,
            ...val.payload.doc.data() as Object,
          }
        });
      }
    );
  }

  ngOnInit(): void {
    this.getCategories();
    // console.log(this.categories)
  }

}
