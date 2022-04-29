//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ErrataList } from './erratalist.complex';
import { ErrataListModel } from './erratalist.model';
import { ErrataListCollection } from './erratalist.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ErrataListComplexConfig = {
  name: 'ErrataList',
  model: ErrataListModel,
  collection: ErrataListCollection,
  fields: {
    Items: {type: 'CBS.Website.ODataApi.Models.ErratumItem', collection: true}
  }
} as StructuredTypeConfig<ErrataList>;
//#endregion