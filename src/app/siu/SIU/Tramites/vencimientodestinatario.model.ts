import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CitaDestinatariosModel } from './citadestinatarios.model';
import { VencimientoDestinatario } from './vencimientodestinatario.entity';
import { VencimientoDestinatarioCollection } from './vencimientodestinatario.collection';
//#endregion

export class VencimientoDestinatarioModel<E extends VencimientoDestinatario> extends CitaDestinatariosModel<E> {
  //#region ODataApi Properties
  descripcion?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}