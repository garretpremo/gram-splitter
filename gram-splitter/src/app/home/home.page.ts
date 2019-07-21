import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  handleClickSwipeSplit() {
    console.log("click swipe split");
    this.router.navigateByUrl('/swipe-split');
  }

  handleClickGridSplit() {
    console.log("click grid split");
    this.router.navigateByUrl('/grid-split');
  }
}
