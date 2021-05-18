import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-offer-form',
  templateUrl: './offer-form.component.html',
  styleUrls: ['./offer-form.component.scss']
})
export class OfferFormComponent implements OnInit {
  agree = true;
  allert: string = ''

  constructor(private offerService: OfferService) { }

  isAgree() {
    if (this.agree === null) {
      this.agree = true;
    } else {
      this.agree = null;
    }
  }

  offer(form: NgForm) {
    let currentDate = date => date.toISOString().slice(0, 10);
    currentDate = currentDate(new Date());

    let data = { date: currentDate, ...form.value };
    this.offerService.sendOffer(data).then(
      () => {
        this.allert = 'Ваша заявка принята!' 
        form.reset();
      }
    );
  }

  ngOnInit(): void {
  }

}
