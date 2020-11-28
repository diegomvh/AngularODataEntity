import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Attachment } from './attachment.entity';
import { OutlookItem } from './outlookitem.entity';
import { OutlookItemModel } from './outlookitem.model';
import { AttachmentModel } from './attachment.model';
import { OutlookItemCollection } from './outlookitem.collection';
import { AttachmentCollection } from './attachment.collection';
//#endregion

export interface ItemAttachment extends Attachment {
  //#region ODataApi Properties
  item?: OutlookItem;
  //#endregion
}