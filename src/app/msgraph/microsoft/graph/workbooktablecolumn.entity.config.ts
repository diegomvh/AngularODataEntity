import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookTableColumn } from './workbooktablecolumn.entity';
//#endregion

export const WorkbookTableColumnConfig = {
  name: "workbookTableColumn",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    index: {type: 'Edm.Int32', nullable: false},
    name: {type: 'Edm.String'},
    values: {type: 'graph.Json'},
    filter: {type: 'graph.workbookFilter', navigation: true}
  }
} as EntityConfig<WorkbookTableColumn>;