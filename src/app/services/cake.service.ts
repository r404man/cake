import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CakeService {
  constructor(private firestore: AngularFirestore, private firestorage: AngularFireStorage) { }

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  percentage: Observable<number>;

  // categories[];
  categoriesThumb = [];

  createCategory(title, thumb) {
    const id = Math.random().toString(36).substring(2);
    // console.log(title, thumb, 'data')
    // this.firestorage.upload()
    this.firestore.collection('categories').add({ id: id, title: title });
    this.ref = this.firestorage.ref('/categories/' + id);
    this.task = this.ref.put(thumb);

    this.percentage = this.task.percentageChanges();
  }

  getCategories() {
    return this.firestore.collection('categories').snapshotChanges();
  }

  getCategory(id:string) {
    return this.firestore.collection('categories').doc(id).get();
  }

  getCategoryThumbs() {
    return this.firestorage.refFromURL(`gs://leila-bakery.appspot.com/categories/`).listAll();
  }

  getCategoryThumb(id: string) {
    return this.firestorage.refFromURL(`gs://leila-bakery.appspot.com/categories/${id}`).getDownloadURL()
  }

  deleteCategory(docId: string, imgId: string) {
    // console.log(id, imgId);
    this.firestore.collection('categories').doc(docId).delete();
    this.firestorage.refFromURL(`gs://leila-bakery.appspot.com/categories/${imgId}`).delete();
  }

  // Cake ops
  getCakes() {
    return this.firestore.collection('cakes').snapshotChanges();
  }

  getCakeImg(id: string) {
    return this.firestorage.refFromURL(`gs://leila-bakery.appspot.com/cakes/${id}`).getDownloadURL()
  }

  cakeCreate(cakeData, cakeImg) {
    const id = Math.random().toString(36).substring(2);

    this.firestore.collection('cakes').add({ id: id, ...cakeData });

    this.ref = this.firestorage.ref('/cakes/' + id);
    this.task = this.ref.put(cakeImg);

    return this.task.percentageChanges();
  }

  cakeDelete(id: string, imgId: string) {
    // console.log(id, imgId);
    this.firestorage.refFromURL(`gs://leila-bakery.appspot.com/cakes/${imgId}`).delete();
    return this.firestore.collection('cakes').doc(id).delete();
  }

  getCake(id:string) {
    return this.firestore.collection('cakes').doc(id).get();
  }

  editCake(id: string, data) {
    return this.firestore.collection('cakes').doc(id).set(data);
  }

}
