import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { ApplePushNotificationCertificate } from './applepushnotificationcertificate.entity';
import { ApplePushNotificationCertificateModel } from './applepushnotificationcertificate.model';
//#endregion

export class ApplePushNotificationCertificateCollection<E extends ApplePushNotificationCertificate, M extends ApplePushNotificationCertificateModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}