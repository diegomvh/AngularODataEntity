import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CitaNotificacion } from './citanotificacion.entity';
import { CitaNotificacionCollection } from './citanotificacion.collection';
//#endregion

export class CitaNotificacionModel<E extends CitaNotificacion> extends ODataModel<E> {
  //#region ODataApi Properties
  desde: Date;
  hasta: Date;
  contenido?: string;
  temaCitaId: number;
  temaCita?: string;
  nic?: string;
  nuf?: string;
  fiscalia?: string;
  oficinaId?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}