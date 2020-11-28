import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Empleado } from '../Personas/empleado.entity';
import { Expediente } from './expediente.entity';
import { MovimientoExpediente } from './movimientoexpediente.entity';
import { EmpleadoModel } from '../Personas/empleado.model';
import { ExpedienteModel } from './expediente.model';
import { MovimientoExpedienteModel } from './movimientoexpediente.model';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { ExpedienteCollection } from './expediente.collection';
//#endregion

export class MovimientoExpedienteCollection<E extends MovimientoExpediente, M extends MovimientoExpedienteModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}