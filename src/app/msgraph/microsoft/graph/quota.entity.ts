import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { StoragePlanInformation } from './storageplaninformation.entity';
//#endregion

export interface Quota {
  //#region ODataApi Properties
  deleted?: number;
  remaining?: number;
  state?: string;
  total?: number;
  used?: number;
  storagePlanInformation?: StoragePlanInformation;
  //#endregion
}