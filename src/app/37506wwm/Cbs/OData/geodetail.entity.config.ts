import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { GeoDetail } from './geodetail.entity';
import { GeoDetailModel } from './geodetail.model';
import { GeoDetailCollection } from './geodetail.collection';
//#endregion

export const GeoDetailConfig = {
  name: "GeoDetail",
  base: "Cbs.OData.DimensionOrTopic",
  model: GeoDetailModel,
  collection: GeoDetailCollection,
  annotations: [],
  fields: {
    MapYear: {type: 'Edm.Int32'}
  }
} as StructuredTypeConfig<GeoDetail>;