import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MobileApp } from './mobileapp.entity';
import { MicrosoftStoreForBusinessLicenseType } from './microsoftstoreforbusinesslicensetype.enum';
import { MobileAppModel } from './mobileapp.model';
import { MobileAppCollection } from './mobileapp.collection';
//#endregion

export interface MicrosoftStoreForBusinessApp extends MobileApp {
  //#region ODataApi Properties
  licenseType: MicrosoftStoreForBusinessLicenseType;
  packageIdentityName?: string;
  productKey?: string;
  totalLicenseCount: number;
  usedLicenseCount: number;
  //#endregion
}