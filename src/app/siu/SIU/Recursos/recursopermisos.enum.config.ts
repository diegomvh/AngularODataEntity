import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { RecursoPermisos } from './recursopermisos.enum';
//#endregion

export const RecursoPermisosConfig = {
  name: "RecursoPermisos",
  flags: true,
  members: RecursoPermisos
} as EnumConfig<RecursoPermisos>;