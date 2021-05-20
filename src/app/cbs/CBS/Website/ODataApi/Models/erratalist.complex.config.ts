import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ErrataList } from './erratalist.complex';
import { ErrataListModel } from './erratalist.model';
import { ErrataListCollection } from './erratalist.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const ErrataListComplexConfig = {
  name: "ErrataList",
  model: ErrataListModel,
  collection: ErrataListCollection,
  fields: {
    Items: {type: 'CBS.Website.ODataApi.Models.ErratumItem', collection: true}
  }
} as StructuredTypeConfig<ErrataList>;
//#endregion