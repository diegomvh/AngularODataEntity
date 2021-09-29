//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Dimension } from './dimension.entity';
import { DimensionModel } from './dimension.model';
import { DimensionCollection } from './dimension.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DimensionEntityConfig = {
  name: "Dimension",
  base: "Cbs.OData.DimensionOrTopic",
  model: DimensionModel,
  collection: DimensionCollection,
  fields: {
    
  }
} as StructuredTypeConfig<Dimension>;
//#endregion