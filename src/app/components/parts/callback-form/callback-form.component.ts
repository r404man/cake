import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-callback-form',
  templateUrl: './callback-form.component.html',
  styleUrls: ['./callback-form.component.scss']
})
export class CallbackFormComponent implements OnInit {
  constructor(private reviewService: ReviewService) { }

  errMsg: string = null

  createReview(form: NgForm) {
    let data = form.value;
    for (let field in data) {
      if (data[field].length === 0) {
        return this.errMsg === 'Заполните поля'
      } else {
        continue;
      }
    }

    let currentDate = date => date.toISOString().slice(0, 10);
    currentDate = currentDate(new Date());

    data.date = currentDate;
    this.reviewService.addReview(data).finally(
      () => {
        this.errMsg = 'Ваш отзыв успешно отправлен!'
      }
    ).catch((e) => {
      this.errMsg = 'При отправке произошла ошибка'
      console.error(e);
    });
  }

  ngOnInit(): void {
  }

}
