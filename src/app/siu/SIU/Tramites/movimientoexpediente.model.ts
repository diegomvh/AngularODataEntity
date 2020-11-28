import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Empleado } from '../Personas/empleado.entity';
import { Expediente } from './expediente.entity';
import { MovimientoExpediente } from './movimientoexpediente.entity';
import { EmpleadoModel } from '../Personas/empleado.model';
import { ExpedienteModel } from './expediente.model';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { ExpedienteCollection } from './expediente.collection';
import { MovimientoExpedienteCollection } from './movimientoexpediente.collection';
//#endregion

export class MovimientoExpedienteModel<E extends MovimientoExpediente> extends ODataModel<E> {
  //#region ODataApi Properties
  expedienteId?: number;
  fecha: Date;
  descripcion: string;
  empleadoId?: number;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  expediente?: ExpedienteModel<Expediente>;
  empleado?: EmpleadoModel<Empleado>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}