import {Component, OnInit} from '@angular/core';

/**
 * @title Basic slider
 */
@Component({
  selector: 'slider-overview-example',
  templateUrl: 'slider-overview-example.html',
  styleUrls: ['slider-overview-example.css'],
})
export class SliderOverviewExample implements OnInit {
  top: number;
  left: number;

  center() {
    this.top = 100;
    this.left = 100;
  }

  topleft() {
    this.top = 0;
    this.left = 0;
  }

  bottomright() {
    this.top = 200;
    this.left = 200;
  }

  ngOnInit() {
    this.center();
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */