import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TimeZoneBase } from './timezonebase.entity';
//#endregion

export const TimeZoneBaseConfig = {
  name: "TimeZoneBase",
  annotations: [],
  fields: {
    name: {type: 'Edm.String'}
  }
} as EntityConfig<TimeZoneBase>;