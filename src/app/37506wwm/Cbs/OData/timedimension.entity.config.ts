import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { TimeDimension } from './timedimension.entity';
import { TimeDimensionModel } from './timedimension.model';
import { TimeDimensionCollection } from './timedimension.collection';
//#endregion

export const TimeDimensionConfig = {
  name: "TimeDimension",
  base: "Cbs.OData.DimensionOrTopic",
  open: true,
  model: TimeDimensionModel,
  collection: TimeDimensionCollection,
  annotations: [],
  fields: {
    ReleasePolicy: {type: 'Edm.Boolean'}
  }
} as StructuredTypeConfig<TimeDimension>;