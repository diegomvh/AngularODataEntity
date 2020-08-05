import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DateTimeTimeZone } from './datetimetimezone.entity';
//#endregion

export interface TimeSlot {
  //#region ODataApi Properties
  start: DateTimeTimeZone;
  end: DateTimeTimeZone;
  //#endregion
}