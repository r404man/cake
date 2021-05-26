import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-offer-form',
  templateUrl: './offer-form.component.html',
  styleUrls: ['./offer-form.component.scss']
})
export class OfferFormComponent implements OnInit {
  @Input() cakeId: string = null;
  agree = true;
  allert: string = ''
  isAllert: boolean = false;
  constructor(private offerService: OfferService) { }

  isAgree() {
    if (this.agree === null) {
      this.agree = true;
    } else {
      this.agree = null;
    }
  }

  offer(form: NgForm) {
    let { username, userphone, usermail } = form.value;
    if (username.length < 3 && userphone.length < 3 && usermail.length < 3) {
      this.isAllert = true;
      this.allert = 'Введите корректные данные !';
    } else {
      let currentDate = date => date.toISOString().slice(0, 10);
      currentDate = currentDate(new Date());
      let data = { date: currentDate, offerObject: this.cakeId, ...form.value };
      this.offerService.sendOffer(data).then(
        () => {
          this.isAllert = false;
          this.allert = 'Ваша заявка принята!'
          form.reset();
        }
      );
    }

  }

  ngOnInit(): void {
  }

}
