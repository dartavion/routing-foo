import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'house',
    loadChildren: () => import('./house/house.module').then(m => m.HouseModule),
  },
  {
    path: 'cats',
    loadChildren: () => import('./cats/cats.module').then(m => m.CatsModule),
  },
  {
    path: 'dogs',
    loadChildren: () => import('./dogs/dogs.module').then(m => m.DogsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
