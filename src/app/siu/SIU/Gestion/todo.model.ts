import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ToDo } from './todo.entity';
import { Empleado } from '../Personas/empleado.entity';
import { EmpleadoModel } from '../Personas/empleado.model';
import { ToDoCollection } from './todo.collection';
import { EmpleadoCollection } from '../Personas/empleado.collection';
//#endregion

export class ToDoModel<E extends ToDo> extends ODataModel<E> {
  //#region ODataApi Properties
  empleadoId?: number;
  descripcion: string;
  completado: boolean;
  fecha: Date;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  empleado?: EmpleadoModel<Empleado>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}