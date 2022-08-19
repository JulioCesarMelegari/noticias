import { Istatus } from './Istatus';
import { Noticia } from './noticia.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor() { }

  listarNoticias(): Noticia[]{
    const noticias = localStorage['noticias'];
    return noticias ? JSON.parse(noticias) : [];
  }

  cadastrar(noticia: Noticia): void{
    const noticias = this.listarNoticias();
    noticia.id = new Date().getTime();
    noticia.data =  Date.now();
    noticia.status= Istatus[1];
    noticias.push(noticia);
    localStorage['noticias'] = JSON.stringify(noticias);
  }

  buscarPorId(id: number): Noticia {
    const noticias: Noticia[] = this.listarNoticias();
    return noticias.find(noticia => noticia.id === id);
  }

  atualizar(noticia: Noticia): void{
    const noticias:Noticia[] = this.listarNoticias();
    noticias.forEach((obj, index, objs) =>{
      if(noticia.id === obj.id){
        objs[index] = noticia;
      }
    });
    localStorage['noticias'] = JSON.stringify(noticias);
  }

  remover(id: number):void{
    let noticias: Noticia[] = this.listarNoticias();
    noticias = noticias.filter(noticia => noticia.id !== id);
    localStorage['noticias'] = JSON.stringify(noticias);
  }

  alterarStatus(id: number): void{
    let noticias: Noticia[] = this.listarNoticias();
    noticias.forEach((obj, index, objs) =>{
      if(id === obj.id){
        objs[index].status =  objs[index].status = Istatus[1] ? Istatus[2] : Istatus[1];
      }
    });
    localStorage['noticias'] = JSON.stringify(noticias);
  }
}
