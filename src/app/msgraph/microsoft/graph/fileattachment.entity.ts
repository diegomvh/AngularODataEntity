import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Attachment } from './attachment.entity';
//#endregion

export interface FileAttachment extends Attachment {
  //#region ODataApi Properties
  contentId?: string;
  contentLocation?: string;
  contentBytes?: ArrayBuffer;
  //#endregion
}