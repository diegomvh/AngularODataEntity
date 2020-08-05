import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { CommsNotification } from './commsnotification.entity';
//#endregion

export interface CommsNotifications {
  //#region ODataApi Properties
  value?: CommsNotification[];
  //#endregion
}