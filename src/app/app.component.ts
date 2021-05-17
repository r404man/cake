import { Component } from '@angular/core';
import { trigger } from '@angular/animations'
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations/routeAnimtaion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})


export class AppComponent {
  title = 'allias-cake';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
