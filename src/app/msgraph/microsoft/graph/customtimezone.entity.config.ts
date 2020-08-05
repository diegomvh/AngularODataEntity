import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CustomTimeZone } from './customtimezone.entity';
//#endregion

export const CustomTimeZoneConfig = {
  name: "customTimeZone",
  base: "microsoft.graph.timeZoneBase",
  annotations: [],
  fields: {
    bias: {type: 'Edm.Int32'},
    standardOffset: {type: 'graph.standardTimeZoneOffset'},
    daylightOffset: {type: 'graph.daylightTimeZoneOffset'}
  }
} as EntityConfig<CustomTimeZone>;