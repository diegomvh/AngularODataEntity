//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { GeoDimension } from './geodimension.entity';
import { GeoDimensionModel } from './geodimension.model';
import { GeoDimensionCollection } from './geodimension.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const GeoDimensionEntityConfig = {
  name: "GeoDimension",
  base: "Cbs.OData.DimensionOrTopic",
  model: GeoDimensionModel,
  collection: GeoDimensionCollection,
  fields: {
    MapYear: {type: 'Edm.Int32'}
  }
} as StructuredTypeConfig<GeoDimension>;
//#endregion