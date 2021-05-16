import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/interfaces/category';
import { CakeService } from 'src/app/services/cake.service';

@Component({
  selector: 'app-cake-create',
  templateUrl: './cake-create.component.html',
  styleUrls: ['./cake-create.component.scss']
})
export class CakeCreateComponent implements OnInit {
  categories: Category[] = null;
  cakeImage = null;
  percentTask;
  cakes = [];

  constructor(private cakeService: CakeService) { }

  cakeCreate(form: NgForm) {
    let cakeItem = form.value;
    this.cakeService.cakeCreate(cakeItem, this.cakeImage).subscribe(
      taskProgress => {
        this.percentTask = taskProgress;
        if(taskProgress === 100) {
          form.reset();
          this.getCakes();
          this.getCategories();
        }
      }
    );
  }

  getCategories() {
    this.cakeService.getCategories().subscribe(
      data => {
        this.categories = data.map(val => val.payload.doc.data() as Category);
      }
    )
  }

  cakeThumb(event) {
    this.cakeImage = event.target.files[0];
  }

  getCakes() {
    this.cakeService.getCakes().subscribe(
      data => {
        this.cakes = data.map((val) => {
          return {
            docId: val.payload.doc.id,
            ...val.payload.doc.data() as Object
          }
        });
      }
    )
  }


  ngOnInit(): void {
    this.getCategories();
    this.getCakes();
  }

}
