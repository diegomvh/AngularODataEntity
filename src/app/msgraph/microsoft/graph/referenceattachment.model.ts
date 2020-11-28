import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AttachmentModel } from './attachment.model';
import { ReferenceAttachment } from './referenceattachment.entity';
import { ReferenceAttachmentCollection } from './referenceattachment.collection';
//#endregion

export class ReferenceAttachmentModel<E extends ReferenceAttachment> extends AttachmentModel<E> {
  //#region ODataApi Properties
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}