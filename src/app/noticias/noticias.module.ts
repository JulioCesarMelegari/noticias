import { RouterModule } from '@angular/router';
import { NoticiaService } from './shared/noticia.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { FormsModule } from '@angular/forms';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EditarComponent } from './editar/editar.component';
import { FakeDirective } from './shared/fake.directive';



@NgModule({
  declarations: [
    ListarComponent,
    CadastrarComponent,
    EditarComponent,
    FakeDirective
  ],
  providers:[NoticiaService],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class NoticiasModule { }
