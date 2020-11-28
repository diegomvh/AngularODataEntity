import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ChangeType } from './changetype.enum';
import { LifecycleEventType } from './lifecycleeventtype.enum';
import { ChangeNotificationEncryptedContent } from './changenotificationencryptedcontent.complex';
import { ResourceData } from './resourcedata.complex';
import { ChangeNotificationEncryptedContentModel } from './changenotificationencryptedcontent.model';
import { ResourceDataModel } from './resourcedata.model';
import { ChangeNotificationEncryptedContentCollection } from './changenotificationencryptedcontent.collection';
import { ResourceDataCollection } from './resourcedata.collection';
//#endregion

export interface ChangeNotification {
  //#region ODataApi Properties
  changeType: ChangeType;
  clientState?: string;
  encryptedContent?: ChangeNotificationEncryptedContent;
  id?: string;
  lifecycleEvent?: LifecycleEventType;
  resource: string;
  resourceData?: ResourceData;
  subscriptionExpirationDateTime: Date;
  subscriptionId: string;
  tenantId: string;
  //#endregion
}