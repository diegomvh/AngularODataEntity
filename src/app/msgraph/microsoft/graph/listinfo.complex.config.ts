import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ListInfo } from './listinfo.complex';
import { ListInfoModel } from './listinfo.model';
import { ListInfoCollection } from './listinfo.collection';
//#endregion

export const ListInfoConfig = {
  name: "listInfo",
  model: ListInfoModel,
  collection: ListInfoCollection,
  annotations: [],
  fields: {
    contentTypesEnabled: {type: 'Edm.Boolean'},
    hidden: {type: 'Edm.Boolean'},
    template: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ListInfo>;