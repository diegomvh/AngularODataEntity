import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CommsNotification } from './commsnotification.complex';
import { CommsNotifications } from './commsnotifications.complex';
import { CommsNotificationModel } from './commsnotification.model';
import { CommsNotificationCollection } from './commsnotification.collection';
import { CommsNotificationsCollection } from './commsnotifications.collection';
//#endregion

export class CommsNotificationsModel<E extends CommsNotifications> extends ODataModel<E> {
  //#region ODataApi Properties
  value?: CommsNotificationCollection<CommsNotification, CommsNotificationModel<CommsNotification>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}