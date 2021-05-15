import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'


@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private firestore: AngularFirestore) { }

  getReviews() {
    return this.firestore.collection('reviews').snapshotChanges();
  }

  addReview(data) {
    return this.firestore.collection('reviews').add(data);
  }

  deleteReview(id:string) {
    return this.firestore.collection('reviews').doc(id).delete();
  }

}

