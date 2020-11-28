import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AttachmentCollection } from './attachment.collection';
import { FileAttachment } from './fileattachment.entity';
import { FileAttachmentModel } from './fileattachment.model';
//#endregion

export class FileAttachmentCollection<E extends FileAttachment, M extends FileAttachmentModel<E>> extends AttachmentCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}