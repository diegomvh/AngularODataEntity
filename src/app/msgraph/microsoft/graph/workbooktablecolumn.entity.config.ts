import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookTableColumn } from './workbooktablecolumn.entity';
import { WorkbookTableColumnModel } from './workbooktablecolumn.model';
import { WorkbookTableColumnCollection } from './workbooktablecolumn.collection';
//#endregion

export const WorkbookTableColumnConfig = {
  name: "workbookTableColumn",
  base: "microsoft.graph.entity",
  model: WorkbookTableColumnModel,
  collection: WorkbookTableColumnCollection,
  annotations: [],
  fields: {
    index: {type: 'Edm.Int32', nullable: false},
    name: {type: 'Edm.String'},
    values: {type: 'graph.Json'},
    filter: {type: 'graph.workbookFilter', navigation: true}
  }
} as StructuredTypeConfig<WorkbookTableColumn>;