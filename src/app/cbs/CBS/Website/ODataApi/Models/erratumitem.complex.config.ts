//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ErratumItem } from './erratumitem.complex';
import { ErratumItemModel } from './erratumitem.model';
import { ErratumItemCollection } from './erratumitem.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ErratumItemComplexConfig = {
  name: "ErratumItem",
  model: ErratumItemModel,
  collection: ErratumItemCollection,
  fields: {
    PresentationTime: {type: 'Edm.DateTimeOffset', nullable: false},
    Body: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ErratumItem>;
//#endregion