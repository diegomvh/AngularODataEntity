import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CitaNotificacion } from './citanotificacion.entity';
import { CitaNotificacionModel } from './citanotificacion.model';
//#endregion

export class CitaNotificacionCollection<E extends CitaNotificacion, M extends CitaNotificacionModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}