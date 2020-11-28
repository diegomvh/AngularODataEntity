import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ChangeType } from './changetype.enum';
import { LifecycleEventType } from './lifecycleeventtype.enum';
import { ChangeNotification } from './changenotification.complex';
import { ChangeNotificationEncryptedContent } from './changenotificationencryptedcontent.complex';
import { ResourceData } from './resourcedata.complex';
import { ChangeNotificationModel } from './changenotification.model';
import { ChangeNotificationEncryptedContentModel } from './changenotificationencryptedcontent.model';
import { ResourceDataModel } from './resourcedata.model';
import { ChangeNotificationEncryptedContentCollection } from './changenotificationencryptedcontent.collection';
import { ResourceDataCollection } from './resourcedata.collection';
//#endregion

export class ChangeNotificationCollection<E extends ChangeNotification, M extends ChangeNotificationModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}