import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookTableSort } from './workbooktablesort.entity';
//#endregion

export const WorkbookTableSortConfig = {
  name: "workbookTableSort",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    fields: {type: 'graph.workbookSortField', collection: true},
    matchCase: {type: 'Edm.Boolean', nullable: false},
    method: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<WorkbookTableSort>;