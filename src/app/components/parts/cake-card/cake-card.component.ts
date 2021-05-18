import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CakeService } from 'src/app/services/cake.service';

@Component({
  selector: 'app-cake-card',
  templateUrl: './cake-card.component.html',
  styleUrls: ['./cake-card.component.scss']
})
export class CakeCardComponent implements OnInit {
  @Input() cake = null;
  @Input() docId;

  cakeThumbUrl: string = null;
  cakeCmp = [];
  isEdit: boolean = false;

  allert: string = null;

  constructor(private cakeService: CakeService) { }

  getCakeImg() {
    this.cakeService.getCakeImg(this.cake.id).subscribe(
      data => {
        this.cakeThumbUrl = data;
      }
    )
  }

  getCakeCmp() {
    this.cakeCmp = this.cake.sostav.split(';');
  }

  cakeDelete(id: string) {
    // console.log(id);
    let imgId = this.cake.id;
    this.cakeService.cakeDelete(id, imgId)
  }

  edit() {
    this.isEdit = !this.isEdit;
  }

  editCake(form: NgForm) {
    let cakeData = {
      category: this.cake.category,
      id: this.cake.id,
      name: form.value.name,
      sostav: form.value.sostav,
    };
    this.cakeService.editCake(this.cake.docId, cakeData).finally(
      () => {
        this.allert = 'Данные сохранены'
        form.reset()
      }
    );
  }

  ngOnInit(): void {
    this.getCakeImg();
    this.getCakeCmp();
  }

}
