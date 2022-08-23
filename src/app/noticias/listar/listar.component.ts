import { NoticiaService } from './../shared/noticia.service';
import { Noticia } from './../shared/noticia.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  noticias: Noticia[];

  constructor(private noticiaService: NoticiaService) { }

  ngOnInit() {
    this.noticias = this.listarNoticias();
    /*this.noticias = [
      new Noticia(1,'homem vai a lua','em 1977 primeiro hoblvb','çlkadjfç',123456,false),
      new Noticia(2,'homem atropelado','carro atropela..','çlkadjfç',123456,true),

    ]*/
  }

  listarNoticias(): Noticia[]{
    return this.noticiaService.listarNoticias();
  }

  remover($event: any, noticia: Noticia): void{
    $event.preventDefault();
    if(confirm('Deseja remover a notícia "' + noticia.titulo +'"?')){
      this.noticiaService.remover(noticia.id);
      this.noticias = this.listarNoticias();
    }
  }

  alterarStatus(noticia:Noticia):void{
    if(confirm('Deseja alterar o status da notícia "' + noticia.titulo +'"?')){
      this.noticiaService.alterarStatus(noticia.id);
      this.noticias = this.noticiaService.listarNoticias();
    }
  }
}
