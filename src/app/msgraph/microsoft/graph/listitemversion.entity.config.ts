import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ListItemVersion } from './listitemversion.entity';
//#endregion

export const ListItemVersionConfig = {
  name: "listItemVersion",
  base: "microsoft.graph.baseItemVersion",
  annotations: [],
  fields: {
    fields: {type: 'graph.fieldValueSet', navigation: true}
  }
} as EntityConfig<ListItemVersion>;