import { NoticiaService } from './../shared/noticia.service';
import { NgForm } from '@angular/forms';
import { Noticia } from './../shared/noticia.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  @ViewChild('formNoticia',{static:true}) formNoticia:NgForm;
  noticia:Noticia;

  constructor(
    private noticiaService: NoticiaService,
    private route: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.noticia=this.noticiaService.buscarPorId(id);
  }

  atualizar(): void{
    if(this.formNoticia.form.valid){
      this.noticiaService.atualizar(this.noticia);
      this.router.navigate(['/noticias']);
    }
  }

}
