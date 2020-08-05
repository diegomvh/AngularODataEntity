import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { MobileAppContentFileUploadState } from './mobileappcontentfileuploadstate.enum';
//#endregion

export const MobileAppContentFileUploadStateConfig = {
  name: "MobileAppContentFileUploadState",
  members: MobileAppContentFileUploadState
} as EnumConfig<MobileAppContentFileUploadState>;