import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookWorksheet } from './workbookworksheet.entity';
import { WorkbookWorksheetModel } from './workbookworksheet.model';
import { WorkbookWorksheetCollection } from './workbookworksheet.collection';
//#endregion

export const WorkbookWorksheetConfig = {
  name: "workbookWorksheet",
  base: "microsoft.graph.entity",
  model: WorkbookWorksheetModel,
  collection: WorkbookWorksheetCollection,
  annotations: [],
  fields: {
    name: {type: 'Edm.String'},
    position: {type: 'Edm.Int32', nullable: false},
    visibility: {type: 'Edm.String', nullable: false},
    charts: {type: 'graph.workbookChart', collection: true, navigation: true},
    names: {type: 'graph.workbookNamedItem', collection: true, navigation: true},
    pivotTables: {type: 'graph.workbookPivotTable', collection: true, navigation: true},
    protection: {type: 'graph.workbookWorksheetProtection', navigation: true},
    tables: {type: 'graph.workbookTable', collection: true, navigation: true}
  }
} as StructuredTypeConfig<WorkbookWorksheet>;