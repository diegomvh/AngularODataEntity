import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ApplicationGuardBlockFileTransferType } from './applicationguardblockfiletransfertype.enum';
//#endregion

export const ApplicationGuardBlockFileTransferTypeConfig = {
  name: "applicationGuardBlockFileTransferType",
  members: ApplicationGuardBlockFileTransferType
} as EnumConfig<ApplicationGuardBlockFileTransferType>;