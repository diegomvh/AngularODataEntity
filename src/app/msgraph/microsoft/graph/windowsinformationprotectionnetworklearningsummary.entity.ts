import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface WindowsInformationProtectionNetworkLearningSummary extends Entity {
  //#region ODataApi Properties
  deviceCount: number;
  url?: string;
  //#endregion
}