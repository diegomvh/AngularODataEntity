import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { AttachmentItem } from './attachmentitem.complex';
import { UploadSession } from './uploadsession.complex';
import { Attachment } from './attachment.entity';
import { AttachmentItemModel } from './attachmentitem.model';
import { UploadSessionModel } from './uploadsession.model';
import { AttachmentItemCollection } from './attachmentitem.collection';
import { UploadSessionCollection } from './uploadsession.collection';
import { AttachmentCollection } from './attachment.collection';
//#endregion

export class AttachmentModel<E extends Attachment> extends EntityModel<E> {
  //#region ODataApi Properties
  contentType?: string;
  isInline: boolean;
  lastModifiedDateTime?: Date;
  name?: string;
  size: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}