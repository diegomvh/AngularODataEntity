import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ApplicationType } from './applicationtype.enum';
//#endregion

export interface WindowsInformationProtectionAppLearningSummary extends Entity {
  //#region ODataApi Properties
  applicationName?: string;
  applicationType: ApplicationType;
  deviceCount: number;
  //#endregion
}