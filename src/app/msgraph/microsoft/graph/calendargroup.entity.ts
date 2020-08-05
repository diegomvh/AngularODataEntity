import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { Calendar } from './calendar.entity';
//#endregion

export interface CalendarGroup extends Entity {
  //#region ODataApi Properties
  name?: string;
  classId?: string;
  changeKey?: string;
  calendars?: Calendar[];
  //#endregion
}