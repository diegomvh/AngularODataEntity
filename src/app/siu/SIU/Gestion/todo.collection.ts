import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ToDo } from './todo.entity';
import { Empleado } from '../Personas/empleado.entity';
import { ToDoModel } from './todo.model';
import { EmpleadoModel } from '../Personas/empleado.model';
import { EmpleadoCollection } from '../Personas/empleado.collection';
//#endregion

export class ToDoCollection<E extends ToDo, M extends ToDoModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}