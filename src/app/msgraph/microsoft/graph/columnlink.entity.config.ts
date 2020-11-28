import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ColumnLink } from './columnlink.entity';
import { ColumnLinkModel } from './columnlink.model';
import { ColumnLinkCollection } from './columnlink.collection';
//#endregion

export const ColumnLinkConfig = {
  name: "columnLink",
  base: "microsoft.graph.entity",
  model: ColumnLinkModel,
  collection: ColumnLinkCollection,
  annotations: [],
  fields: {
    name: {type: 'Edm.String'}
  }
} as EntityConfig<ColumnLink>;