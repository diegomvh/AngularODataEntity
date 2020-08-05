import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ListInfo } from './listinfo.entity';
//#endregion

export const ListInfoConfig = {
  name: "ListInfo",
  annotations: [],
  fields: {
    contentTypesEnabled: {type: 'Edm.Boolean'},
    hidden: {type: 'Edm.Boolean'},
    template: {type: 'Edm.String'}
  }
} as EntityConfig<ListInfo>;