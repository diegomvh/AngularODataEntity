import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ChangeNotificationEncryptedContent } from './changenotificationencryptedcontent.complex';
import { ChangeNotificationEncryptedContentCollection } from './changenotificationencryptedcontent.collection';
//#endregion

export class ChangeNotificationEncryptedContentModel<E extends ChangeNotificationEncryptedContent> extends ODataModel<E> {
  //#region ODataApi Properties
  data: string;
  dataKey: string;
  dataSignature: string;
  encryptionCertificateId: string;
  encryptionCertificateThumbprint: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}