import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(private reviewService: ReviewService) { }

  reviews = [];

getReviews() {
  this.reviewService.getReviews().subscribe(
    data => {
      this.reviews = data.map(val => val.payload.doc.data());
    }
  );
}

ngOnInit(): void {
  this.getReviews();
}

}
