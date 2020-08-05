import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookTableRow } from './workbooktablerow.entity';
//#endregion

export const WorkbookTableRowConfig = {
  name: "WorkbookTableRow",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    index: {type: 'Edm.Int32', nullable: false},
    values: {type: 'graph.Json'}
  }
} as EntityConfig<WorkbookTableRow>;