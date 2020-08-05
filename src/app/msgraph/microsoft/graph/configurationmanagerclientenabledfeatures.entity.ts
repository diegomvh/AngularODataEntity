import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface ConfigurationManagerClientEnabledFeatures {
  //#region ODataApi Properties
  inventory: boolean;
  modernApps: boolean;
  resourceAccess: boolean;
  deviceConfiguration: boolean;
  compliancePolicy: boolean;
  windowsUpdateForBusiness: boolean;
  //#endregion
}