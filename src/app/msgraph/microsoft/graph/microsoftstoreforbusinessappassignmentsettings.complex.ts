import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MobileAppAssignmentSettings } from './mobileappassignmentsettings.complex';
import { MobileAppAssignmentSettingsModel } from './mobileappassignmentsettings.model';
import { MobileAppAssignmentSettingsCollection } from './mobileappassignmentsettings.collection';
//#endregion

export interface MicrosoftStoreForBusinessAppAssignmentSettings extends MobileAppAssignmentSettings {
  //#region ODataApi Properties
  useDeviceContext: boolean;
  //#endregion
}