import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Requirente } from './requirente.entity';
import { Empleado } from './empleado.entity';
import { TipoIdentificacion } from './tipoidentificacion.entity';
import { RequirenteModel } from './requirente.model';
import { EmpleadoModel } from './empleado.model';
import { RequirenteCollection } from './requirente.collection';
import { EmpleadoCollection } from './empleado.collection';
import { TipoIdentificacionCollection } from './tipoidentificacion.collection';
//#endregion

export class TipoIdentificacionModel<E extends TipoIdentificacion> extends ODataModel<E> {
  //#region ODataApi Properties
  nombre: string;
  descripcion: string;
  oculto: boolean;
  longname?: string;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  empleados?: EmpleadoCollection<Empleado, EmpleadoModel<Empleado>>;
  requirentes?: RequirenteCollection<Requirente, RequirenteModel<Requirente>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}