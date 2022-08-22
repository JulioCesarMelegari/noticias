import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NoticiaRoutes } from '../noticias/noticias-routing.module';

export const routes: Routes = [
{
  path:'',
  redirectTo:'/noticias/listar',
  pathMatch:'full'
},
  ...NoticiaRoutes
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
