import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface DeviceManagementSettings {
  //#region ODataApi Properties
  deviceComplianceCheckinThresholdDays: number;
  isScheduledActionEnabled: boolean;
  secureByDefault: boolean;
  //#endregion
}