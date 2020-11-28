import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { AttachmentType } from './attachmenttype.enum';
//#endregion

export interface AttachmentItem {
  //#region ODataApi Properties
  attachmentType?: AttachmentType;
  contentType?: string;
  isInline?: boolean;
  name?: string;
  size?: number;
  //#endregion
}