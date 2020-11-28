import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AttachmentCollection } from './attachment.collection';
import { OutlookItem } from './outlookitem.entity';
import { ItemAttachment } from './itemattachment.entity';
import { OutlookItemModel } from './outlookitem.model';
import { ItemAttachmentModel } from './itemattachment.model';
import { OutlookItemCollection } from './outlookitem.collection';
//#endregion

export class ItemAttachmentCollection<E extends ItemAttachment, M extends ItemAttachmentModel<E>> extends AttachmentCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}