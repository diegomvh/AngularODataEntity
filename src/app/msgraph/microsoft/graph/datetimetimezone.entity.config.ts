import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DateTimeTimeZone } from './datetimetimezone.entity';
//#endregion

export const DateTimeTimeZoneConfig = {
  name: "dateTimeTimeZone",
  annotations: [],
  fields: {
    dateTime: {type: 'Edm.String', nullable: false},
    timeZone: {type: 'Edm.String'}
  }
} as EntityConfig<DateTimeTimeZone>;