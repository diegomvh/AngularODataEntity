//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Flash } from './flash.entity';
import { FlashModel } from './flash.model';
import { FlashCollection } from './flash.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const FlashEntityConfig = {
  name: "Flash",
  model: FlashModel,
  collection: FlashCollection,
  keys: [{name: 'UniqueId'}],
  fields: {
    UniqueId: {type: 'Edm.String', nullable: false},
    Title: {type: 'Edm.String'},
    ReleaseTime: {type: 'Edm.DateTimeOffset', nullable: false},
    Description: {type: 'Edm.String'},
    LeadText: {type: 'Edm.String'},
    Url: {type: 'Edm.String'},
    MetaDescription: {type: 'Edm.String'},
    Language: {type: 'Edm.String'},
    Version: {type: 'Edm.Int32', nullable: false},
    SortOrder: {type: 'Edm.Int32', nullable: false},
    ItemNameLowerCase: {type: 'Edm.String'},
    Updated: {type: 'Edm.DateTimeOffset', nullable: false},
    Created: {type: 'Edm.DateTimeOffset', nullable: false}
  }
} as StructuredTypeConfig<Flash>;
//#endregion