import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'; 
import { ProjetoApiService } from '../service/projeto-api.service';
import { Projeto } from '../model/projeto';

@Component({
  selector: 'has-novo-projeto',
  templateUrl: './novo-projeto.component.html',
  styleUrls: ['./novo-projeto.component.css']
})
export class NovoProjetoComponent implements OnInit {
  formNovo: FormGroup;

  constructor (private formBuilder: FormBuilder,
                private service: ProjetoApiService) { }
  

  ngOnInit() {
    this.formNovo = this.formBuilder.group ({
    nome: this.formBuilder.control(''),
    sala: this.formBuilder.control(''),
    turma: this.formBuilder.control(''),
    orientadores: this.formBuilder.control('')
    })
  }

  onSalvar() {
    let projeto : Projeto = this.formNovo.value;
    this.service.createProjeto(projeto)
    .subscribe(data => console.log(data),
    error => console.log(error));
    }

}
