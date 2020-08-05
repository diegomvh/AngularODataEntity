import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ItemBody } from './itembody.entity';
//#endregion

export const ItemBodyConfig = {
  name: "itemBody",
  annotations: [],
  fields: {
    contentType: {type: 'graph.bodyType'},
    content: {type: 'Edm.String'}
  }
} as EntityConfig<ItemBody>;