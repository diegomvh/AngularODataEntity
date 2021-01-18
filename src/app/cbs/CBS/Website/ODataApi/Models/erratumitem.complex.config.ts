import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ErratumItem } from './erratumitem.complex';
import { ErratumItemModel } from './erratumitem.model';
import { ErratumItemCollection } from './erratumitem.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const ErratumItemComplexConfig = {
  name: "ErratumItem",
  model: ErratumItemModel,
  collection: ErratumItemCollection,
  annotations: [],
  fields: {
    PresentationTime: {type: 'Edm.DateTimeOffset', nullable: false},
    Body: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ErratumItem>;
//#endregion