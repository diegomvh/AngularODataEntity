import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AttachmentModel } from './attachment.model';
import { OutlookItem } from './outlookitem.entity';
import { ItemAttachment } from './itemattachment.entity';
import { OutlookItemModel } from './outlookitem.model';
import { OutlookItemCollection } from './outlookitem.collection';
import { ItemAttachmentCollection } from './itemattachment.collection';
//#endregion

export class ItemAttachmentModel<E extends ItemAttachment> extends AttachmentModel<E> {
  //#region ODataApi Properties
  item?: OutlookItemModel<OutlookItem>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}