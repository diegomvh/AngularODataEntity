import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MicrosoftStoreForBusinessLicenseType } from './microsoftstoreforbusinesslicensetype.enum';
//#endregion

export const MicrosoftStoreForBusinessLicenseTypeConfig = {
  name: "microsoftStoreForBusinessLicenseType",
  members: MicrosoftStoreForBusinessLicenseType
} as EnumTypeConfig<MicrosoftStoreForBusinessLicenseType>;