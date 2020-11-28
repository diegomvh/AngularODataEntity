import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Empleado } from './empleado.entity';
import { CategoriaEmpleado } from './categoriaempleado.entity';
import { EmpleadoModel } from './empleado.model';
import { EmpleadoCollection } from './empleado.collection';
import { CategoriaEmpleadoCollection } from './categoriaempleado.collection';
//#endregion

export class CategoriaEmpleadoModel<E extends CategoriaEmpleado> extends ODataModel<E> {
  //#region ODataApi Properties
  nombre: string;
  oculto: boolean;
  esResponsable?: boolean;
  esSubResponsable?: boolean;
  esDefensorPenal: boolean;
  esAbogado?: boolean;
  esProfesional?: boolean;
  esReferente?: boolean;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  empleados?: EmpleadoCollection<Empleado, EmpleadoModel<Empleado>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}