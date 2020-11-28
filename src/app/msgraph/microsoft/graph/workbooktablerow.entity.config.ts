import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookTableRow } from './workbooktablerow.entity';
import { WorkbookTableRowModel } from './workbooktablerow.model';
import { WorkbookTableRowCollection } from './workbooktablerow.collection';
//#endregion

export const WorkbookTableRowConfig = {
  name: "workbookTableRow",
  base: "microsoft.graph.entity",
  model: WorkbookTableRowModel,
  collection: WorkbookTableRowCollection,
  annotations: [],
  fields: {
    index: {type: 'Edm.Int32', nullable: false},
    values: {type: 'graph.Json'}
  }
} as StructuredTypeConfig<WorkbookTableRow>;