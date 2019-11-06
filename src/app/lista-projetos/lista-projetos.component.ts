import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'has-lista-projetos',
  templateUrl: './lista-projetos.component.html',
  styleUrls: ['./lista-projetos.component.css']
})
export class ListaProjetosComponent implements OnInit {
  projetos = [{"nome":"Projeto 1","sala":"L08","turma":"2Q"},
              {"nome":"Projeto 2","sala":"L07","turma":"1Q"}]; 
  constructor() { }

  ngOnInit() {
  }

}
