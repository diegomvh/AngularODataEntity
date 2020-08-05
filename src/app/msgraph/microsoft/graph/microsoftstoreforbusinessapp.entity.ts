import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MobileApp } from './mobileapp.entity';
import { MicrosoftStoreForBusinessLicenseType } from './microsoftstoreforbusinesslicensetype.enum';
//#endregion

export interface MicrosoftStoreForBusinessApp extends MobileApp {
  //#region ODataApi Properties
  usedLicenseCount: number;
  totalLicenseCount: number;
  productKey?: string;
  licenseType: MicrosoftStoreForBusinessLicenseType;
  packageIdentityName?: string;
  //#endregion
}