import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CitaDestinatarios } from './citadestinatarios.entity';
import { CitaDestinatariosModel } from './citadestinatarios.model';
//#endregion

export class CitaDestinatariosCollection<E extends CitaDestinatarios, M extends CitaDestinatariosModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}