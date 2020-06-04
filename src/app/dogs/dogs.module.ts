import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DogsRoutingModule } from './dogs-routing.module';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    DogsRoutingModule
  ]
})
export class DogsModule { }
