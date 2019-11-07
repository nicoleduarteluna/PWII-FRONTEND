import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'has-lista-projetos',
  templateUrl: './lista-projetos.component.html',
  styleUrls: ['./lista-projetos.component.css']
})
export class ListaProjetosComponent implements OnInit {
  projetos = [{"nome":"Projeto 1","sala":"L08","turma":"2Q"},
              {"nome":"Projeto 2","sala":"L07","turma":"1Q"}]; 
  constructor(private router: Router) { }

  ngOnInit() {
  }

  detalhes (id:number){
    this.router.navigate(['detalhe-projeto',id]);
}

}
