import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CustomTimeZone } from './customtimezone.entity';
import { CustomTimeZoneModel } from './customtimezone.model';
import { CustomTimeZoneCollection } from './customtimezone.collection';
//#endregion

export const CustomTimeZoneConfig = {
  name: "customTimeZone",
  base: "microsoft.graph.timeZoneBase",
  model: CustomTimeZoneModel,
  collection: CustomTimeZoneCollection,
  annotations: [],
  fields: {
    bias: {type: 'Edm.Int32'},
    daylightOffset: {type: 'graph.daylightTimeZoneOffset'},
    standardOffset: {type: 'graph.standardTimeZoneOffset'}
  }
} as EntityConfig<CustomTimeZone>;