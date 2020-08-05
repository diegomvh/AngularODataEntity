import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { DataPolicyOperationStatus } from './datapolicyoperationstatus.enum';
//#endregion

export interface DataPolicyOperation extends Entity {
  //#region ODataApi Properties
  completedDateTime?: Date;
  status?: DataPolicyOperationStatus;
  storageLocation?: string;
  userId: string;
  submittedDateTime: Date;
  progress: number;
  //#endregion
}