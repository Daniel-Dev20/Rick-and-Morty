import { RespuestaTopHeadlines, Result } from './../../interfaces/interfaces';
import { NoticiasService } from './../../services/noticias.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  personajes: Result[] = [];
  constructor(private noticiasService: NoticiasService) {}
  ngOnInit(){
    this.noticiasService.getTopHeadlines().subscribe(
      response=>{
        console.log('noticias', response);
        this.personajes.push(...response.results);
      });
  }

}
