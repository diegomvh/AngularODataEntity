import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MovimientoCasoConAgendado } from './movimientocasoconagendado.entity';
import { MovimientoCasoConAgendadoCollection } from './movimientocasoconagendado.collection';
//#endregion

export class MovimientoCasoConAgendadoModel<E extends MovimientoCasoConAgendado> extends ODataModel<E> {
  //#region ODataApi Properties
  id: number;
  fecha: Date;
  estadoCasoId: number;
  estadoCaso?: string;
  observaciones?: string;
  vencimiento1?: Date;
  vencimiento2?: Date;
  agendados?: string;
  rev?: ArrayBuffer;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}