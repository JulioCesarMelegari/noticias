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
}
