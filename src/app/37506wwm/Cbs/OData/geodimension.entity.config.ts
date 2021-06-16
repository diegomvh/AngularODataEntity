//#region AngularOData Imports
import { 
  StructuredTypeConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { GeoDimension } from './geodimension.entity';
import { GeoDimensionModel } from './geodimension.model';
import { GeoDimensionCollection } from './geodimension.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
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