import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DaylightTimeZoneOffset } from './daylighttimezoneoffset.entity';
import { DaylightTimeZoneOffsetModel } from './daylighttimezoneoffset.model';
import { DaylightTimeZoneOffsetCollection } from './daylighttimezoneoffset.collection';
//#endregion

export const DaylightTimeZoneOffsetConfig = {
  name: "daylightTimeZoneOffset",
  base: "microsoft.graph.standardTimeZoneOffset",
  model: DaylightTimeZoneOffsetModel,
  collection: DaylightTimeZoneOffsetCollection,
  annotations: [],
  fields: {
    daylightBias: {type: 'Edm.Int32'}
  }
} as EntityConfig<DaylightTimeZoneOffset>;