import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  test = Array(45).fill(0).map((e, i) => i + 1);

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.test)
  }

}
