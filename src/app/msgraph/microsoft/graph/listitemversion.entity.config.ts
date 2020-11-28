import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ListItemVersion } from './listitemversion.entity';
import { ListItemVersionModel } from './listitemversion.model';
import { ListItemVersionCollection } from './listitemversion.collection';
//#endregion

export const ListItemVersionConfig = {
  name: "listItemVersion",
  base: "microsoft.graph.baseItemVersion",
  model: ListItemVersionModel,
  collection: ListItemVersionCollection,
  annotations: [],
  fields: {
    fields: {type: 'graph.fieldValueSet', navigation: true}
  }
} as StructuredTypeConfig<ListItemVersion>;