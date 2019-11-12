import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Projeto } from '../model/projeto';

@Injectable({
  providedIn: 'root'
})
export class ProjetoApiService {
apiURL:string = "http://quiteriaetec.somee.com/api/"
  constructor(private httpClient: HttpClient) { }

  handleError (error) {
      let errorMessage = `Código de erro: ${error.status}\n Mensagem: ${error.message}`;
      alert (errorMessage);
      return throwError(errorMessage);
  }

  getProjetos () : Observable <Projeto[]> {
      return this.httpClient.get<Projeto[]>(this.apiURL + "Projetos")
                            .pipe(retry(1), 
                                  catchError(this.handleError))
  }




}
