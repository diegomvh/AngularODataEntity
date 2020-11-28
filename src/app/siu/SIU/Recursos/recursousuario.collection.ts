import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecursoPermisos } from './recursopermisos.enum';
import { Recurso } from './recurso.entity';
import { RecursoUsuario } from './recursousuario.entity';
import { Empleado } from '../Personas/empleado.entity';
import { RecursoModel } from './recurso.model';
import { RecursoUsuarioModel } from './recursousuario.model';
import { EmpleadoModel } from '../Personas/empleado.model';
import { RecursoCollection } from './recurso.collection';
import { EmpleadoCollection } from '../Personas/empleado.collection';
//#endregion

export class RecursoUsuarioCollection<E extends RecursoUsuario, M extends RecursoUsuarioModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}