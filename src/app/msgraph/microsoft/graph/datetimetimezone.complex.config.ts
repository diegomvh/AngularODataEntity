import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DateTimeTimeZone } from './datetimetimezone.complex';
import { DateTimeTimeZoneModel } from './datetimetimezone.model';
import { DateTimeTimeZoneCollection } from './datetimetimezone.collection';
//#endregion

export const DateTimeTimeZoneConfig = {
  name: "dateTimeTimeZone",
  model: DateTimeTimeZoneModel,
  collection: DateTimeTimeZoneCollection,
  annotations: [],
  fields: {
    dateTime: {type: 'Edm.String', nullable: false},
    timeZone: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<DateTimeTimeZone>;