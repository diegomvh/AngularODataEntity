import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Attachment } from './attachment.entity';
import { OutlookItem } from './outlookitem.entity';
//#endregion

export interface ItemAttachment extends Attachment {
  //#region ODataApi Properties
  item?: OutlookItem;
  //#endregion
}