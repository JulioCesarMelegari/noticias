import { NoticiaService } from './../shared/noticia.service';
import { Noticia } from './../shared/noticia.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  @ViewChild('formNoticia', {static:true}) formNoticia: NgForm;
  noticia:Noticia;

  constructor(
    private noticiaService: NoticiaService,
    private router: Router
   ) { }

  ngOnInit(): void {
    this.noticia = new Noticia();
  }

  cadastrar():void{
    if(this.formNoticia.form.valid){
      this.noticiaService.cadastrar(this.noticia);
      this.router.navigate(["/noticias"]);
    }
  }

}
