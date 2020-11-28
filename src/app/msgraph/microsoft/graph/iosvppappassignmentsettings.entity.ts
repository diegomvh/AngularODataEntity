import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MobileAppAssignmentSettings } from './mobileappassignmentsettings.entity';
import { MobileAppAssignmentSettingsModel } from './mobileappassignmentsettings.model';
import { MobileAppAssignmentSettingsCollection } from './mobileappassignmentsettings.collection';
//#endregion

export interface IosVppAppAssignmentSettings extends MobileAppAssignmentSettings {
  //#region ODataApi Properties
  useDeviceLicensing: boolean;
  vpnConfigurationId?: string;
  //#endregion
}