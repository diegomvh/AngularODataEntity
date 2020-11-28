import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { StoragePlanInformation } from './storageplaninformation.entity';
import { StoragePlanInformationModel } from './storageplaninformation.model';
import { StoragePlanInformationCollection } from './storageplaninformation.collection';
//#endregion

export interface Quota {
  //#region ODataApi Properties
  deleted?: number;
  remaining?: number;
  state?: string;
  storagePlanInformation?: StoragePlanInformation;
  total?: number;
  used?: number;
  //#endregion
}