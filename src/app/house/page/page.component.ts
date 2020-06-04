import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  // test = Array(45).fill(0).map((e, i) => i + 1);
test;
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.test = this.router.snapshot.data.contact;
    console.log('test', this.test);
  }

}
