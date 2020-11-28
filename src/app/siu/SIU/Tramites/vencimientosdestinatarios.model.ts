import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { VencimientosDestinatarios } from './vencimientosdestinatarios.entity';
import { VencimientoDestinatario } from './vencimientodestinatario.entity';
import { VencimientoDestinatarioModel } from './vencimientodestinatario.model';
import { VencimientosDestinatariosCollection } from './vencimientosdestinatarios.collection';
import { VencimientoDestinatarioCollection } from './vencimientodestinatario.collection';
//#endregion

export class VencimientosDestinatariosModel<E extends VencimientosDestinatarios> extends ODataModel<E> {
  //#region ODataApi Properties
  vencimientos?: VencimientoDestinatarioCollection<VencimientoDestinatario, VencimientoDestinatarioModel<VencimientoDestinatario>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}