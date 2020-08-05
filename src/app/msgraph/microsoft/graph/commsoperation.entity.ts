import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { OperationStatus } from './operationstatus.enum';
import { ResultInfo } from './resultinfo.entity';
//#endregion

export interface CommsOperation extends Entity {
  //#region ODataApi Properties
  status: OperationStatus;
  clientContext?: string;
  resultInfo?: ResultInfo;
  //#endregion
}