import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookTableSort } from './workbooktablesort.entity';
import { WorkbookTableSortModel } from './workbooktablesort.model';
import { WorkbookTableSortCollection } from './workbooktablesort.collection';
//#endregion

export const WorkbookTableSortConfig = {
  name: "workbookTableSort",
  base: "microsoft.graph.entity",
  model: WorkbookTableSortModel,
  collection: WorkbookTableSortCollection,
  annotations: [],
  fields: {
    fields: {type: 'graph.workbookSortField', collection: true},
    matchCase: {type: 'Edm.Boolean', nullable: false},
    method: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<WorkbookTableSort>;