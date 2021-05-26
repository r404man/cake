import { Component, Input, OnInit } from '@angular/core';
import { Cake } from 'src/app/interfaces/cake';
import { CakeService } from 'src/app/services/cake.service';

@Component({
  selector: 'app-offer-cake-info',
  templateUrl: './offer-cake-info.component.html',
  styleUrls: ['./offer-cake-info.component.scss']
})
export class OfferCakeInfoComponent implements OnInit {
  @Input() offerCakeKey: string;
  cake: Cake;

  constructor(private cakeService: CakeService) { }

  getCake() {
    this.cakeService.getCake(this.offerCakeKey).subscribe(
      data => {
        this.cake = data.data() as Cake;
      }
    )
  }

  ngOnInit(): void {
    this.getCake();
  }

}
