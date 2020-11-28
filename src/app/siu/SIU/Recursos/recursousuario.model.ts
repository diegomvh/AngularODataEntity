import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecursoPermisos } from './recursopermisos.enum';
import { Recurso } from './recurso.entity';
import { RecursoUsuario } from './recursousuario.entity';
import { Empleado } from '../Personas/empleado.entity';
import { RecursoModel } from './recurso.model';
import { EmpleadoModel } from '../Personas/empleado.model';
import { RecursoCollection } from './recurso.collection';
import { RecursoUsuarioCollection } from './recursousuario.collection';
import { EmpleadoCollection } from '../Personas/empleado.collection';
//#endregion

export class RecursoUsuarioModel<E extends RecursoUsuario> extends ODataModel<E> {
  //#region ODataApi Properties
  recursoId?: number;
  usuarioId?: number;
  key?: string;
  fecha: Date;
  permisos: RecursoPermisos;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  recurso?: RecursoModel<Recurso>;
  usuario?: EmpleadoModel<Empleado>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}