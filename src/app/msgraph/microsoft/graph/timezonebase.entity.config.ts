import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TimeZoneBase } from './timezonebase.entity';
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
} as EntityConfig<TimeZoneBase>;