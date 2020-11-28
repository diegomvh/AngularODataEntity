import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { RecursoTipoAccion } from './recursotipoaccion.enum';
//#endregion

export interface RecursoEstadoMetadata {
  //#region ODataApi Properties
  version?: string;
  key?: string;
  accion?: RecursoTipoAccion;
  observacion?: string;
  //#endregion
}