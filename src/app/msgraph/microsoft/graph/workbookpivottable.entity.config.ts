import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookPivotTable } from './workbookpivottable.entity';
//#endregion

export const WorkbookPivotTableConfig = {
  name: "WorkbookPivotTable",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    name: {type: 'Edm.String'},
    worksheet: {type: 'graph.workbookWorksheet', navigation: true}
  }
} as EntityConfig<WorkbookPivotTable>;