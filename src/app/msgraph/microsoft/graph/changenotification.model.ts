import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ChangeType } from './changetype.enum';
import { LifecycleEventType } from './lifecycleeventtype.enum';
import { ChangeNotification } from './changenotification.complex';
import { ChangeNotificationEncryptedContent } from './changenotificationencryptedcontent.complex';
import { ResourceData } from './resourcedata.complex';
import { ChangeNotificationEncryptedContentModel } from './changenotificationencryptedcontent.model';
import { ResourceDataModel } from './resourcedata.model';
import { ChangeNotificationCollection } from './changenotification.collection';
import { ChangeNotificationEncryptedContentCollection } from './changenotificationencryptedcontent.collection';
import { ResourceDataCollection } from './resourcedata.collection';
//#endregion

export class ChangeNotificationModel<E extends ChangeNotification> extends ODataModel<E> {
  //#region ODataApi Properties
  changeType: ChangeType;
  clientState?: string;
  encryptedContent?: ChangeNotificationEncryptedContentModel<ChangeNotificationEncryptedContent>;
  id?: string;
  lifecycleEvent?: LifecycleEventType;
  resource: string;
  resourceData?: ResourceDataModel<ResourceData>;
  subscriptionExpirationDateTime: Date;
  subscriptionId: string;
  tenantId: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}