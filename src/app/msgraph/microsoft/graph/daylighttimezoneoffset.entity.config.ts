import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DaylightTimeZoneOffset } from './daylighttimezoneoffset.entity';
//#endregion

export const DaylightTimeZoneOffsetConfig = {
  name: "DaylightTimeZoneOffset",
  base: "microsoft.graph.standardTimeZoneOffset",
  annotations: [],
  fields: {
    daylightBias: {type: 'Edm.Int32'}
  }
} as EntityConfig<DaylightTimeZoneOffset>;