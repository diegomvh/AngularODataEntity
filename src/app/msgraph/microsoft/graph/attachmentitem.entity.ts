import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { AttachmentType } from './attachmenttype.enum';
//#endregion

export interface AttachmentItem {
  //#region ODataApi Properties
  attachmentType?: AttachmentType;
  name?: string;
  size?: number;
  contentType?: string;
  isInline?: boolean;
  //#endregion
}