import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Offer } from '../interfaces/offer';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private firestore: AngularFirestore) { }

  sendOffer(data) {
    return this.firestore.collection('offers').add(data);
  }

  getOffers() {
    return this.firestore.collection('offers').snapshotChanges();
  }

  deleteOffer(id:string) {
    return this.firestore.collection('offers').doc(id).delete();
  }
}
