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
    console.log(title, thumb, 'data')
    // this.firestorage.upload()
    this.firestore.collection('categories').add({ id: id, title: title });
    this.ref = this.firestorage.ref('/categories/' + id);
    this.task = this.ref.put(thumb);

    this.percentage = this.task.percentageChanges();
  }

  getCategories() {
    return this.firestore.collection('categories').snapshotChanges();
  }

  getCategoryThumbs() {
    return this.firestorage.refFromURL(`gs://leila-bakery.appspot.com/categories/`).listAll();
  }

  getCategoryThumb(id:string) {
    return this.firestorage.refFromURL(`gs://leila-bakery.appspot.com/categories/${id}`).getDownloadURL()
  }

  deleteCategory(id: string) {
    this.firestore.collection('categories').doc(id).delete();
    this.getCategoryThumb(id).subscribe(
      data => {
        data.map(val => {
          // val.
          // delete thumb
        })
      }
    )
  }
}
