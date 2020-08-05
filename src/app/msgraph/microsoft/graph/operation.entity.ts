import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { OperationStatus } from './operationstatus.enum';
//#endregion

export interface Operation extends Entity {
  //#region ODataApi Properties
  status?: OperationStatus;
  createdDateTime?: Date;
  lastActionDateTime?: Date;
  //#endregion
}