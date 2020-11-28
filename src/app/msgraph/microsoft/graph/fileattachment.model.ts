import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AttachmentModel } from './attachment.model';
import { FileAttachment } from './fileattachment.entity';
import { FileAttachmentCollection } from './fileattachment.collection';
//#endregion

export class FileAttachmentModel<E extends FileAttachment> extends AttachmentModel<E> {
  //#region ODataApi Properties
  contentBytes?: ArrayBuffer;
  contentId?: string;
  contentLocation?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}