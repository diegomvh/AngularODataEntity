import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ColumnLink } from './columnlink.entity';
//#endregion

export const ColumnLinkConfig = {
  name: "ColumnLink",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    name: {type: 'Edm.String'}
  }
} as EntityConfig<ColumnLink>;