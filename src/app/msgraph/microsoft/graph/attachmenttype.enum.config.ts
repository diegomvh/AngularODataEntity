import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { AttachmentType } from './attachmenttype.enum';
//#endregion

export const AttachmentTypeConfig = {
  name: "attachmentType",
  members: AttachmentType
} as EnumConfig<AttachmentType>;