import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { RecursoEstadoMetadata } from './recursoestadometadata.entity';
import { RecursoChange } from './recursochange.entity';
import { RecursoEstadoMetadataModel } from './recursoestadometadata.model';
import { RecursoChangeModel } from './recursochange.model';
import { RecursoEstadoMetadataCollection } from './recursoestadometadata.collection';
import { RecursoChangeCollection } from './recursochange.collection';
//#endregion

export interface RecursoModificadoMetadata extends RecursoEstadoMetadata {
  //#region ODataApi Properties
  changes?: RecursoChange[];
  url?: string;
  changesUrl?: string;
  serverVersion?: string;
  //#endregion
}