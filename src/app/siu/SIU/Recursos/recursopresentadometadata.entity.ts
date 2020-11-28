import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { RecursoEstadoMetadata } from './recursoestadometadata.entity';
import { RecursoEstadoMetadataModel } from './recursoestadometadata.model';
import { RecursoEstadoMetadataCollection } from './recursoestadometadata.collection';
//#endregion

export interface RecursoPresentadoMetadata extends RecursoEstadoMetadata {
  //#region ODataApi Properties
  fecha?: Date;
  destinatarioId?: number;
  destinatario?: string;
  seguimiento?: string;
  //#endregion
}