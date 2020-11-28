import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { Calendar } from './calendar.entity';
import { EntityModel } from './entity.model';
import { CalendarModel } from './calendar.model';
import { EntityCollection } from './entity.collection';
import { CalendarCollection } from './calendar.collection';
//#endregion

export interface CalendarGroup extends Entity {
  //#region ODataApi Properties
  changeKey?: string;
  classId?: string;
  name?: string;
  calendars?: Calendar[];
  //#endregion
}