import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Offer } from 'src/app/interfaces/offer';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-offers-page',
  templateUrl: './offers-page.component.html',
  styleUrls: ['./offers-page.component.scss']
})
export class OffersPageComponent implements OnInit {
  $offers: Observable<Offer[]>
  offers: Offer[];

  constructor(private offerService: OfferService) { }

  getOffers() {
    this.offerService.getOffers().subscribe(
      data => {
        this.offers = data.map(
          val => {
            return {
              id: val.payload.doc.id,
              ...val.payload.doc.data() as Offer
            }
          }
        )
      }
    );
  }

  deleteOffer(id: string) {
    this.offerService.deleteOffer(id);
  }
  ngOnInit(): void {
    this.getOffers();
  }

}
