import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { RecursoTipoAccion } from './recursotipoaccion.enum';
//#endregion

export const RecursoTipoAccionConfig = {
  name: "RecursoTipoAccion",
  members: RecursoTipoAccion
} as EnumConfig<RecursoTipoAccion>;