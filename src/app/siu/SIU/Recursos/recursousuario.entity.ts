import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { RecursoPermisos } from './recursopermisos.enum';
import { Recurso } from './recurso.entity';
import { Empleado } from '../Personas/empleado.entity';
import { RecursoModel } from './recurso.model';
import { EmpleadoModel } from '../Personas/empleado.model';
import { RecursoCollection } from './recurso.collection';
import { EmpleadoCollection } from '../Personas/empleado.collection';
//#endregion

export interface RecursoUsuario {
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
  recurso?: Recurso;
  usuario?: Empleado;
  //#endregion
}