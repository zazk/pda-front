import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Pago } from "../../../models/pago";
import { Subject } from "rxjs/Subject";
import { Pax } from "../../../models/pax";

@Injectable()
export class UserService {
  //public url: string = "//localhost:8080/";
  public url: string = "//ima.pe:8080/";

  user: Subject<any> = new Subject();
  constructor(private http: HttpClient) {}

  set theUser(value: any) {
    this.user.next(value); // this will make sure to tell every subscriber about the change.
    console.log("HERE WE SET");
    localStorage.setItem("currentUser", value);
  }

  get theUser() {
    return localStorage.getItem("currentUser");
  }

  login(): Observable<any> {
    return this.http.get(this.url + "login");
  }

  /* ( String user, String pwd ) */
  loginUser(user: string, pwd: string): Observable<any> {
    return this.http.get(this.url + `login_user?user=${user}&pwd=${pwd}`);
  }

  /* ( String codOperador ) */
  consultaOperador(): Observable<any> {
    return this.http.get(this.url + "consulta_operador");
  }

  /* ( String email ) */
  consultaOperadorxemail(): Observable<any> {
    return this.http.get(this.url + "consulta_operadorxemail");
  }

  /* ( Integer codVisitante ) */
  consultaVisitante(): Observable<any> {
    return this.http.get(this.url + "consulta_visitante");
  }

  /* ( Integer codGrupo ) */
  consultaGrupo(): Observable<any> {
    return this.http.get(this.url + "consulta_grupo");
  }

  /* ( Integer codGrupo ) */
  listVisitantexgrupo(): Observable<any> {
    return this.http.get(this.url + "list_visitantexgrupo");
  }

  /* ( String codOperador ) */
  consultaGrupooperador( codOperador: string): Observable<any> {
    return this.http.get(this.url + `consulta_grupooperador?codOperador=${codOperador}`);
  }

  /* ( String codOperador ) */
  consultaPagooperador( codOperador: string): Observable<any> {
    return this.http.get(this.url + `consulta_pagooperador?codOperador=${codOperador}`);
  }

  /* ( String nroOperacion, String fecPago, Integer estado ) */
  filtroPagooperador(): Observable<any> {
    return this.http.get(this.url + "filtro_pagooperador");
  }

  /* ( String nroOperacion, String codOperador ) */
  filtroPagorecaudador(): Observable<any> {
    return this.http.get(this.url + "filtro_pagorecaudador");
  }

  /* ( String codGrupo, String fecVisita, Integer estado ) */
  filtroGrupooperador(): Observable<any> {
    return this.http.get(this.url + "filtro_grupooperador");
  }

  listVistantes(): Observable<any> {
    return this.http.get(this.url + "list_visitantes");
  }

  listRutas(): Observable<any> {
    return this.http.get(this.url + "list_rutas");
  }

  listCategorias(): Observable<any> {
    return this.http.get(this.url + "list_categorias");
  }

  listPaises(): Observable<any> {
    return this.http.get(this.url + "list_paises");
  }

  listTipdocumentos(): Observable<any> {
    return this.http.get(this.url + "list_tipdocumentos");
  }

  listNoticias(): Observable<any> {
    return this.http.get(this.url + "list_noticias");
  }

  listNoticiasactivas(): Observable<any> {
    return this.http.get(this.url + "list_noticias_activas");
  }

  listGrupos(): Observable<any> {
    return this.http.get(this.url + "list_grupos");
  }

  listPagos(): Observable<any> {
    return this.http.get(this.url + "list_pagos");
  }

  /* ( String titulo, String contenido, LocalDate date, String user ) */
  insertNews(): Observable<any> {
    return this.http.get(this.url + "insert_news");
  }

  /* ( Integer codDocumento, Integer codCategoria, Integer codPais, String nombre,
    String apellido, String nroDocumento, LocalDate fNac, Integer sexo ) */
  insertVisitante(): Observable<any> {
    return this.http.get(this.url + "insert_visitante");
  }


  /* ( Visitantes visitantes) */
  insertVisitantes( paxes: Pax[]): Observable<any> {
    const formData: FormData = new FormData();
    formData.append("visitantes", JSON.stringify( paxes ));
    return this.http.post(this.url + "insert_visitantes", formData);
  }

  /* ( String codOperador, Integer codRuta, LocalDate fecProgramada, Integer nroVisitantes, Integer numCosto, String insUsuario ) */
  insertGrupo(): Observable<any> {
    return this.http.get(this.url + "insert_grupo");
  }

  /* ( Integer codGrupo, Integer codVisitante ) */
  insertVisitantegrupo(): Observable<any> {
    return this.http.get(this.url + "insert_visitantegrupo");
  }

  /* ( String codOperador, String nroOperacion, Integer monto, LocalDate fecAbono, String voucher ) */
  insertPago(pago: Pago): Observable<any> {
    const formData: FormData = new FormData();
    formData.append("codOperador", pago.codOperador);
    formData.append("nroOperacion", pago.operacion);
    formData.append("monto", pago.monto.toString());
    formData.append("fecAbono", pago.fecha);
    formData.append("voucher", pago.voucher);
    return this.http.post(this.url + "insert_pago", formData);
  }

  /* ( Integer codNoticia ) */
  deleteNews(): Observable<any> {
    return this.http.get(this.url + "delete_news");
  }

  /* ( Integer codGrupo, Integer codVisitante ) */
  deleteVisitantegrupo(): Observable<any> {
    return this.http.get(this.url + "delete_visitantegrupo");
  }

  /* ( String newClave, Integer codUser ) */
  updatePwd(): Observable<any> {
    return this.http.get(this.url + "update_pwd");
  }

  /* ( String titulo, String contenido, LocalDate date, Boolean estado, Integer id ) */
  updateNews(): Observable<any> {
    return this.http.get(this.url + "update_news");
  }

  /* ( Integer codDocumento, Integer codCategoria, Integer codPais, String nombre,
    String apellido, String nroDocumento, LocalDate fNac, Integer sexo, Integer id ) */
  updateVisitante(): Observable<any> {
    return this.http.get(this.url + "update_visitante");
  }

  /* ( LocalDate date, Integer codRuta, Integer id ) */
  updateGrupo(): Observable<any> {
    return this.http.get(this.url + "update_grupo");
  }

  /* ( Integer codGrupo, Integer codVisitante, Boolean asistio ) */
  updateAsistencia(): Observable<any> {
    return this.http.get(this.url + "update_asistencia");
  }

  /* ( LocalDate date, Integer nroVisitantes, Integer nroInasistentes, Integer costo,
    Integer estado, String documento, String userModificacion, LocalDate dateModificacion, Integer codGrupo ) */
  updateVisitagrupo(): Observable<any> {
    return this.http.get(this.url + "update_visitagrupo");
  }

  /* ( Integer codGrupo, String documento ) */
  updateDocgrupo(): Observable<any> {
    return this.http.get(this.url + "update_docgrupo");
  }

  /* ( Integer estado, String motivoRechazo, Integer codPago ) */
  updatePagorechazo(): Observable<any> {
    return this.http.get(this.url + "update_pagorechazo");
  }

  uploadFile(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append("imagen", file, file.name);
    return this.http.post(this.url + "upload-pago", formData);
  }
}
