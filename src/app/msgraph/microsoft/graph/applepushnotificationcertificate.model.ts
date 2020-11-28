import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ApplePushNotificationCertificate } from './applepushnotificationcertificate.entity';
import { ApplePushNotificationCertificateCollection } from './applepushnotificationcertificate.collection';
//#endregion

export class ApplePushNotificationCertificateModel<E extends ApplePushNotificationCertificate> extends EntityModel<E> {
  //#region ODataApi Properties
  appleIdentifier?: string;
  certificate?: string;
  expirationDateTime: Date;
  lastModifiedDateTime: Date;
  topicIdentifier?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public downloadApplePushNotificationCertificateSigningRequest(options?: HttpOptions): Observable<string> {
    var res = this._function<null, string>('microsoft.graph.downloadApplePushNotificationCertificateSigningRequest');
    res.segment.entitySet('');
    return res.call(null, 'property', options) as Observable<string>;
  }
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}