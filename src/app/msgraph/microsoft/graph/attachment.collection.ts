import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { AttachmentItem } from './attachmentitem.entity';
import { UploadSession } from './uploadsession.entity';
import { Attachment } from './attachment.entity';
import { AttachmentItemModel } from './attachmentitem.model';
import { UploadSessionModel } from './uploadsession.model';
import { AttachmentModel } from './attachment.model';
import { AttachmentItemCollection } from './attachmentitem.collection';
import { UploadSessionCollection } from './uploadsession.collection';
//#endregion

export class AttachmentCollection<E extends Attachment, M extends AttachmentModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  public createUploadSession(AttachmentItem: AttachmentItem, options?: HttpOptions): Observable<UploadSessionModel<UploadSession>> {
    var res = this._action<{AttachmentItem: AttachmentItem}, UploadSession>('microsoft.graph.createUploadSession');
    res.segment.entitySet('');
    return res.call({AttachmentItem}, 'model', options) as Observable<UploadSessionModel<UploadSession>>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
}