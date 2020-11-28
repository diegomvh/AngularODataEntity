import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CitaDestinatariosCollection } from './citadestinatarios.collection';
import { VencimientoDestinatario } from './vencimientodestinatario.entity';
import { VencimientoDestinatarioModel } from './vencimientodestinatario.model';
//#endregion

export class VencimientoDestinatarioCollection<E extends VencimientoDestinatario, M extends VencimientoDestinatarioModel<E>> extends CitaDestinatariosCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}