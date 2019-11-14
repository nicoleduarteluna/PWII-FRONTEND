import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProjetosComponent } from './lista-projetos/lista-projetos.component';
import { NovoProjetoComponent } from './novo-projeto/novo-projeto.component';
import { DetalheProjetoComponent } from './detalhe-projeto/detalhe-projeto.component';
import { EditarProjetoComponent } from './editar-projeto/editar-projeto.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ListaProjetosComponent,
    NovoProjetoComponent,
    DetalheProjetoComponent,
    EditarProjetoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
