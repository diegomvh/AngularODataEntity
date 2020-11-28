import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ErrataList } from './erratalist.complex';
import { ErrataListModel } from './erratalist.model';
import { ErrataListCollection } from './erratalist.collection';
//#endregion

export const ErrataListConfig = {
  name: "ErrataList",
  model: ErrataListModel,
  collection: ErrataListCollection,
  annotations: [],
  fields: {
    Items: {type: 'CBS.Website.ODataApi.Models.ErratumItem', collection: true}
  }
} as StructuredTypeConfig<ErrataList>;