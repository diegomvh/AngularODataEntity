import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { TimeZoneBase } from './timezonebase.complex';
import { TimeZoneBaseModel } from './timezonebase.model';
import { TimeZoneBaseCollection } from './timezonebase.collection';
//#endregion

export const TimeZoneBaseConfig = {
  name: "timeZoneBase",
  model: TimeZoneBaseModel,
  collection: TimeZoneBaseCollection,
  annotations: [],
  fields: {
    name: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<TimeZoneBase>;