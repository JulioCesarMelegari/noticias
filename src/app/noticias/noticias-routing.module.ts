import { EditarComponent } from './editar/editar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ListarComponent } from './listar/listar.component';
import { Routes } from '@angular/router';

export const NoticiaRoutes: Routes = [
  {
    path:'noticias',
    redirectTo:'noticias/listar'
  },
  {
    path:'noticias/listar',
    component:ListarComponent
  },
  {
    path:'noticias/cadastrar',
    component:CadastrarComponent
  },
  {
    path:'noticias/editar/:id',
    component:EditarComponent
  }
];
