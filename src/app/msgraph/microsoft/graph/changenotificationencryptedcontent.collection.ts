import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ChangeNotificationEncryptedContent } from './changenotificationencryptedcontent.complex';
import { ChangeNotificationEncryptedContentModel } from './changenotificationencryptedcontent.model';
//#endregion

export class ChangeNotificationEncryptedContentCollection<E extends ChangeNotificationEncryptedContent, M extends ChangeNotificationEncryptedContentModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}