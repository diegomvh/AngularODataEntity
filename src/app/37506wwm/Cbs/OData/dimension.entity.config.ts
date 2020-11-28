import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Dimension } from './dimension.entity';
import { DimensionModel } from './dimension.model';
import { DimensionCollection } from './dimension.collection';
//#endregion

export const DimensionConfig = {
  name: "Dimension",
  base: "Cbs.OData.DimensionOrTopic",
  model: DimensionModel,
  collection: DimensionCollection,
  annotations: [],
  fields: {
    
  }
} as StructuredTypeConfig<Dimension>;