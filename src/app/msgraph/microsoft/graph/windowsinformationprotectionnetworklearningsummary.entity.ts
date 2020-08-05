import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
//#endregion

export interface WindowsInformationProtectionNetworkLearningSummary extends Entity {
  //#region ODataApi Properties
  url?: string;
  deviceCount: number;
  //#endregion
}