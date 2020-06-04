import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatsRoutingModule } from './cats-routing.module';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    CatsRoutingModule
  ]
})
export class CatsModule { }
