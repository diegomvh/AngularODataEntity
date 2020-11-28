import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DateTimeTimeZone } from './datetimetimezone.entity';
import { DateTimeTimeZoneModel } from './datetimetimezone.model';
import { DateTimeTimeZoneCollection } from './datetimetimezone.collection';
//#endregion

export interface TimeSlot {
  //#region ODataApi Properties
  end: DateTimeTimeZone;
  start: DateTimeTimeZone;
  //#endregion
}