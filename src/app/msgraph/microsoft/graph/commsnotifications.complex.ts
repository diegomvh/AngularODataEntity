import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { CommsNotification } from './commsnotification.complex';
import { CommsNotificationModel } from './commsnotification.model';
import { CommsNotificationCollection } from './commsnotification.collection';
//#endregion

export interface CommsNotifications {
  //#region ODataApi Properties
  value?: CommsNotification[];
  //#endregion
}