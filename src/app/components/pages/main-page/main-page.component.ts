import { Component, OnInit } from '@angular/core';
import { CakeService } from 'src/app/services/cake.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  categories = [];

  constructor(private cakeService: CakeService) { }

  getCategories() {
    this.cakeService.getCategories().subscribe(
      data => {
        this.categories = data.map(val => {
          return {
            docId: val.payload.doc.id,
            ...val.payload.doc.data() as Object,
          }
        })
      }
    )
  }

  ngOnInit(): void {
    this.getCategories();
  }

}
