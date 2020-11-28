import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AudienciaConAgendado } from './audienciaconagendado.entity';
import { AudienciaConAgendadoCollection } from './audienciaconagendado.collection';
//#endregion

export class AudienciaConAgendadoModel<E extends AudienciaConAgendado> extends ODataModel<E> {
  //#region ODataApi Properties
  id: number;
  avenimientoId?: number;
  empleadoAltaId: number;
  empleadoAlta?: string;
  empleadoModificacionId: number;
  empleadoModificacion?: string;
  agendados?: string;
  fecha: Date;
  observaciones?: string;
  temaCita?: string;
  estadoAudiencia?: string;
  alta: Date;
  modificacion: Date;
  rev?: ArrayBuffer;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}