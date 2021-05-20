import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { TimeDimension } from './timedimension.entity';
import { TimeDimensionModel } from './timedimension.model';
import { TimeDimensionCollection } from './timedimension.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const TimeDimensionEntityConfig = {
  name: "TimeDimension",
  base: "Cbs.OData.DimensionOrTopic",
  open: true,
  model: TimeDimensionModel,
  collection: TimeDimensionCollection,
  fields: {
    ReleasePolicy: {type: 'Edm.Boolean'}
  }
} as StructuredTypeConfig<TimeDimension>;
//#endregion