import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Empleado } from './empleado.entity';
import { CategoriaEmpleado } from './categoriaempleado.entity';
import { EmpleadoModel } from './empleado.model';
import { CategoriaEmpleadoModel } from './categoriaempleado.model';
import { EmpleadoCollection } from './empleado.collection';
//#endregion

export class CategoriaEmpleadoCollection<E extends CategoriaEmpleado, M extends CategoriaEmpleadoModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}