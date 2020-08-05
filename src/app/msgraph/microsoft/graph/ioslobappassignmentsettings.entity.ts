import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MobileAppAssignmentSettings } from './mobileappassignmentsettings.entity';
//#endregion

export interface IosLobAppAssignmentSettings extends MobileAppAssignmentSettings {
  //#region ODataApi Properties
  vpnConfigurationId?: string;
  //#endregion
}