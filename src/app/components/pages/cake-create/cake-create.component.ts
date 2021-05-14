import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cake-create',
  templateUrl: './cake-create.component.html',
  styleUrls: ['./cake-create.component.scss']
})
export class CakeCreateComponent implements OnInit {

  constructor() { }

  cakeCreate(form: NgForm) {
    console.log(form.value);
  }

  ngOnInit(): void {
  }

}
