import { Component, OnInit, Input } from '@angular/core';
import { CakeService } from 'src/app/services/cake.service';
import { Cake } from '../../../interfaces/cake'


@Component({
  selector: 'app-main-cake-card',
  templateUrl: './main-cake-card.component.html',
  styleUrls: ['./main-cake-card.component.scss']
})
export class MainCakeCardComponent implements OnInit {
  @Input() item: Cake;
  @Input() docId;
  cakeThumbUrl;
  cakeCmp = [];

  constructor(private cakeService: CakeService) { }

  getCakeThumb() {
    this.cakeService.getCakeImg(this.item.id).subscribe(
      data => {
        this.cakeThumbUrl = data;
      }
    )
  }

  getCakeCmp() {
    this.cakeCmp = this.item.sostav.split(';');
    this.cakeCmp.splice(3);
  }

  ngOnInit(): void {
    this.getCakeThumb();
    this.getCakeCmp();
  }

}
