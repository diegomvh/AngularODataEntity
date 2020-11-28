import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ChangeNotification } from './changenotification.entity';
import { ChangeNotificationModel } from './changenotification.model';
import { ChangeNotificationCollection } from './changenotification.collection';
//#endregion

export interface ChangeNotificationCollection {
  //#region ODataApi Properties
  value: ChangeNotification[];
  //#endregion
}