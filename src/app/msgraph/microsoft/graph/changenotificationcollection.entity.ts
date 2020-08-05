import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ChangeNotification } from './changenotification.entity';
//#endregion

export interface ChangeNotificationCollection {
  //#region ODataApi Properties
  value: ChangeNotification[];
  //#endregion
}