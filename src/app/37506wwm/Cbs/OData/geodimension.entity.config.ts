import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { GeoDimension } from './geodimension.entity';
import { GeoDimensionModel } from './geodimension.model';
import { GeoDimensionCollection } from './geodimension.collection';
//#endregion

export const GeoDimensionConfig = {
  name: "GeoDimension",
  base: "Cbs.OData.DimensionOrTopic",
  model: GeoDimensionModel,
  collection: GeoDimensionCollection,
  annotations: [],
  fields: {
    MapYear: {type: 'Edm.Int32'}
  }
} as EntityConfig<GeoDimension>;