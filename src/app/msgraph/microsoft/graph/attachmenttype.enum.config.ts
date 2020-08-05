import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { AttachmentType } from './attachmenttype.enum';
//#endregion

export const AttachmentTypeConfig = {
  name: "AttachmentType",
  members: AttachmentType
} as EnumConfig<AttachmentType>;