import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { RecursoTipoEstado } from './recursotipoestado.enum';
//#endregion

export const RecursoTipoEstadoConfig = {
  name: "RecursoTipoEstado",
  members: RecursoTipoEstado
} as EnumConfig<RecursoTipoEstado>;