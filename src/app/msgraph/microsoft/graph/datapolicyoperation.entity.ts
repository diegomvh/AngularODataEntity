import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { DataPolicyOperationStatus } from './datapolicyoperationstatus.enum';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface DataPolicyOperation extends Entity {
  //#region ODataApi Properties
  completedDateTime?: Date;
  progress: number;
  status?: DataPolicyOperationStatus;
  storageLocation?: string;
  submittedDateTime: Date;
  userId: string;
  //#endregion
}