import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private firestore: AngularFirestore) { }

  sendOffer(data) {
    return this.firestore.collection('offers').add(data);
  }
}
