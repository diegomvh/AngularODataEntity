import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CommsNotification } from './commsnotification.entity';
import { CommsNotifications } from './commsnotifications.entity';
import { CommsNotificationModel } from './commsnotification.model';
import { CommsNotificationsModel } from './commsnotifications.model';
import { CommsNotificationCollection } from './commsnotification.collection';
//#endregion

export class CommsNotificationsCollection<E extends CommsNotifications, M extends CommsNotificationsModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}