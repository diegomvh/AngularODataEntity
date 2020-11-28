import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { VencimientosDestinatarios } from './vencimientosdestinatarios.entity';
import { VencimientoDestinatario } from './vencimientodestinatario.entity';
import { VencimientosDestinatariosModel } from './vencimientosdestinatarios.model';
import { VencimientoDestinatarioModel } from './vencimientodestinatario.model';
import { VencimientoDestinatarioCollection } from './vencimientodestinatario.collection';
//#endregion

export class VencimientosDestinatariosCollection<E extends VencimientosDestinatarios, M extends VencimientosDestinatariosModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}