import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { GeoDetail } from './geodetail.entity';
import { GeoDetailModel } from './geodetail.model';
import { GeoDetailCollection } from './geodetail.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const GeoDetailEntityConfig = {
  name: "GeoDetail",
  base: "Cbs.OData.DimensionOrTopic",
  model: GeoDetailModel,
  collection: GeoDetailCollection,
  fields: {
    MapYear: {type: 'Edm.Int32'}
  }
} as StructuredTypeConfig<GeoDetail>;
//#endregion