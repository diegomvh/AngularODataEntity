import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MobileAppAssignmentSettings } from './mobileappassignmentsettings.entity';
//#endregion

export interface MicrosoftStoreForBusinessAppAssignmentSettings extends MobileAppAssignmentSettings {
  //#region ODataApi Properties
  useDeviceContext: boolean;
  //#endregion
}