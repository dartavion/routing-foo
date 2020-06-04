import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Router, Scroll } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { delay, filter, map, pluck, tap } from 'rxjs/operators';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router, private viewportScroller: ViewportScroller) {
    router.events.pipe(
      filter((e): e is Scroll => e instanceof Scroll),
      pluck('position'),
      delay(0),
      map(position => this.scrollTo(position))
    ).subscribe();
  }

  scrollTo(position) {
    if (position !== null) {
      this.viewportScroller.scrollToPosition(position);
    } else {
      this.viewportScroller.scrollToPosition([0, 0]);
    }
  }
}
