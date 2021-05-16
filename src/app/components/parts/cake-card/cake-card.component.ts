import { Component, Input, OnInit } from '@angular/core';
import { CakeService } from 'src/app/services/cake.service';

@Component({
  selector: 'app-cake-card',
  templateUrl: './cake-card.component.html',
  styleUrls: ['./cake-card.component.scss']
})
export class CakeCardComponent implements OnInit {
  @Input() cake = null;
  @Input() docId;

  cakeThumbUrl:string = null;
  cakeCmp = [];

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
    // //finally(
    //   () => {
    //     this.allert = 'Succes'
    //   }
    // );
  }

  ngOnInit(): void {
    this.getCakeImg();
    this.getCakeCmp();
  }

}
