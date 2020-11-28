import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AttachmentType } from './attachmenttype.enum';
import { AttachmentItem } from './attachmentitem.complex';
import { AttachmentItemCollection } from './attachmentitem.collection';
//#endregion

export class AttachmentItemModel<E extends AttachmentItem> extends ODataModel<E> {
  //#region ODataApi Properties
  attachmentType?: AttachmentType;
  contentType?: string;
  isInline?: boolean;
  name?: string;
  size?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}