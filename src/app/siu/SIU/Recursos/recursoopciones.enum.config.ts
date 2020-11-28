import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { RecursoOpciones } from './recursoopciones.enum';
//#endregion

export const RecursoOpcionesConfig = {
  name: "RecursoOpciones",
  flags: true,
  members: RecursoOpciones
} as EnumConfig<RecursoOpciones>;