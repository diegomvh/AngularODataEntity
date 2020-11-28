import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ApplicationType } from './applicationtype.enum';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface WindowsInformationProtectionAppLearningSummary extends Entity {
  //#region ODataApi Properties
  applicationName?: string;
  applicationType: ApplicationType;
  deviceCount: number;
  //#endregion
}