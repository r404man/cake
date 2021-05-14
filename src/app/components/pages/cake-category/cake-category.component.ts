import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CakeService } from 'src/app/services/cake.service';

@Component({
  selector: 'app-cake-category',
  templateUrl: './cake-category.component.html',
  styleUrls: ['./cake-category.component.scss']
})
export class CakeCategoryComponent implements OnInit {

  constructor(private cakeService: CakeService) { }

  category(form: NgForm) {

  }

  categoryThumb(event) {
    let categoryThumb = event.target.files[0];
    console.log(categoryThumb);
  }

  categoryDelete() {
    
  }

  ngOnInit(): void {
  }

}
