import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Attachment } from './attachment.entity';
import { AttachmentModel } from './attachment.model';
import { AttachmentCollection } from './attachment.collection';
//#endregion

export interface FileAttachment extends Attachment {
  //#region ODataApi Properties
  contentBytes?: ArrayBuffer;
  contentId?: string;
  contentLocation?: string;
  //#endregion
}