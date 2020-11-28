import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookPivotTable } from './workbookpivottable.entity';
import { WorkbookPivotTableModel } from './workbookpivottable.model';
import { WorkbookPivotTableCollection } from './workbookpivottable.collection';
//#endregion

export const WorkbookPivotTableConfig = {
  name: "workbookPivotTable",
  base: "microsoft.graph.entity",
  model: WorkbookPivotTableModel,
  collection: WorkbookPivotTableCollection,
  annotations: [],
  fields: {
    name: {type: 'Edm.String'},
    worksheet: {type: 'graph.workbookWorksheet', navigation: true}
  }
} as EntityConfig<WorkbookPivotTable>;