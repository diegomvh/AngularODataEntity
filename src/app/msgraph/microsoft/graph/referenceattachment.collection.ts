import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AttachmentCollection } from './attachment.collection';
import { ReferenceAttachment } from './referenceattachment.entity';
import { ReferenceAttachmentModel } from './referenceattachment.model';
//#endregion

export class ReferenceAttachmentCollection<E extends ReferenceAttachment, M extends ReferenceAttachmentModel<E>> extends AttachmentCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}