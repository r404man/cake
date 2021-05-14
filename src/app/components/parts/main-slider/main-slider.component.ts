import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper'

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent implements OnInit {

  constructor() { }

  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
    },
    loop: true,
    
  }

  ngOnInit(): void {
  }

}
