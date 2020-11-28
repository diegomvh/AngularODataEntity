import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { RecursoEstadoMetadata } from './recursoestadometadata.entity';
import { RecursoEstadoMetadataModel } from './recursoestadometadata.model';
import { RecursoEstadoMetadataCollection } from './recursoestadometadata.collection';
//#endregion

export interface RecursoPreparadoMetadata extends RecursoEstadoMetadata {
  //#region ODataApi Properties
  fecha?: Date;
  identificador?: string;
  firmanteId?: number;
  firmante?: string;
  //#endregion
}