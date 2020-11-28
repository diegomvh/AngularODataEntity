import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { OperationStatus } from './operationstatus.enum';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface Operation extends Entity {
  //#region ODataApi Properties
  createdDateTime?: Date;
  lastActionDateTime?: Date;
  status?: OperationStatus;
  //#endregion
}