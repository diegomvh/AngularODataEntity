import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface ConfigurationManagerClientEnabledFeatures {
  //#region ODataApi Properties
  compliancePolicy: boolean;
  deviceConfiguration: boolean;
  inventory: boolean;
  modernApps: boolean;
  resourceAccess: boolean;
  windowsUpdateForBusiness: boolean;
  //#endregion
}