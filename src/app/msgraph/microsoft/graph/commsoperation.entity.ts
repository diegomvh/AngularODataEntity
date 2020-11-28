import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { OperationStatus } from './operationstatus.enum';
import { ResultInfo } from './resultinfo.complex';
import { ResultInfoModel } from './resultinfo.model';
import { EntityModel } from './entity.model';
import { ResultInfoCollection } from './resultinfo.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface CommsOperation extends Entity {
  //#region ODataApi Properties
  clientContext?: string;
  resultInfo?: ResultInfo;
  status: OperationStatus;
  //#endregion
}