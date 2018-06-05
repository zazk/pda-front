import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserService {
  private url: string = "//localhost:8080/";
  constructor(private http: HttpClient) {}

  login(): Observable<any> {
    return this.http.get(this.url + "login");
  }



  getAll(): Observable<any> {
    return this.http.get(this.url + "login_user");
  }

  getAll(): Observable<any> {
    return this.http.get(this.url + "consulta_operador");
  }

  getAll(): Observable<any> {
    return this.http.get(this.url + "consulta_visitante");
  }

  getAll(): Observable<any> {
    return this.http.get(this.url + "consulta_grupo");
  }

  getAll(): Observable<any> {
    return this.http.get(this.url + "list_visitantexgrupo");
  }

  getAll(): Observable<any> {
    return this.http.get(this.url + "consulta_grupooperador");
  }

  getAll(): Observable<any> {
    return this.http.get(this.url + "filtro_pagorecaudador");
  }

  getAll(): Observable<any> {
    return this.http.get(this.url + "filtro_grupooperador");
  }

  getAll(): Observable<any> {
    return this.http.get(this.url + "list_visitantes");
  }

  getAll(): Observable<any> {
    return this.http.get(this.url + "list_rutas");
  }

  getAll(): Observable<any> {
    return this.http.get(this.url + "list_categorias");
  }

  getAll(): Observable<any> {
    return this.http.get(this.url + "list_paises");
  }

  getAll(): Observable<any> {
    return this.http.get(this.url + "list_tipdocumentos");
  }

  getAll(): Observable<any> {
    return this.http.get(this.url + "list_noticias");
  }

  getAll(): Observable<any> {
    return this.http.get(this.url + "list_noticias_activas");
  }

  getAll(): Observable<any> {
    return this.http.get(this.url + "list_grupos");
  }

  getAll(): Observable<any> {
    return this.http.get(this.url + "insert_news");
  }

  getAll(): Observable<any> {
    return this.http.get(this.url + "insert_visitante");
  }

  getAll(): Observable<any> {
    return this.http.get(this.url + "insert_grupo");
  }

  getAll(): Observable<any> {
    return this.http.get(this.url + "insert_visitantegrupo");
  }

  getAll(): Observable<any> {
    return this.http.get(this.url + "insert_pago");
  }

  getAll(): Observable<any> {
    return this.http.get(this.url + "delete_news");
  }

  getAll(): Observable<any> {
    return this.http.get(this.url + "delete_visitantegrupo");
  }

  getAll(): Observable<any> {
    return this.http.get(this.url + "update_pwd");
  }

  getAll(): Observable<any> {
    return this.http.get(this.url + "update_news");
  }

  getAll(): Observable<any> {
    return this.http.get(this.url + "update_visitante");
  }

  getAll(): Observable<any> {
    return this.http.get(this.url + "update_grupo");
  }

  getAll(): Observable<any> {
    return this.http.get(this.url + "update_asistencia");
  }

  getAll(): Observable<any> {
    return this.http.get(this.url + "update_visitagrupo");
  }

  getAll(): Observable<any> {
    return this.http.get(this.url + "update_docgrupo");
  }

  getAll(): Observable<any> {
    return this.http.get(this.url + "update_pagorechazo");
  }

}
