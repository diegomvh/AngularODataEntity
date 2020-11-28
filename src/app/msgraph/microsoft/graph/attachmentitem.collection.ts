import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AttachmentType } from './attachmenttype.enum';
import { AttachmentItem } from './attachmentitem.entity';
import { AttachmentItemModel } from './attachmentitem.model';
//#endregion

export class AttachmentItemCollection<E extends AttachmentItem, M extends AttachmentItemModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}