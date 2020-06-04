import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HouseRoutingModule } from './house-routing.module';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    HouseRoutingModule
  ],
  providers: [
    {
      provide: 'contact',
      useValue: () => {
        return Array(45).fill(0).map((e, i) => i + 1);
      }
    }
  ]
})
export class HouseModule { }
