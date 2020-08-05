import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookWorksheet } from './workbookworksheet.entity';
//#endregion

export const WorkbookWorksheetConfig = {
  name: "WorkbookWorksheet",
  base: "microsoft.graph.entity",
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
} as EntityConfig<WorkbookWorksheet>;