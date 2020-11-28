import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { Subscription } from './subscription.entity';
import { SubscriptionCollection } from './subscription.collection';
//#endregion

export class SubscriptionModel<E extends Subscription> extends EntityModel<E> {
  //#region ODataApi Properties
  applicationId?: string;
  changeType: string;
  clientState?: string;
  creatorId?: string;
  encryptionCertificate?: string;
  encryptionCertificateId?: string;
  expirationDateTime: Date;
  includeResourceData?: boolean;
  latestSupportedTlsVersion?: string;
  lifecycleNotificationUrl?: string;
  notificationUrl: string;
  resource: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}