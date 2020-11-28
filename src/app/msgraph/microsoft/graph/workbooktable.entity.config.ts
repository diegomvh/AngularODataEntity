import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookTable } from './workbooktable.entity';
import { WorkbookTableModel } from './workbooktable.model';
import { WorkbookTableCollection } from './workbooktable.collection';
//#endregion

export const WorkbookTableConfig = {
  name: "workbookTable",
  base: "microsoft.graph.entity",
  model: WorkbookTableModel,
  collection: WorkbookTableCollection,
  annotations: [],
  fields: {
    highlightFirstColumn: {type: 'Edm.Boolean', nullable: false},
    highlightLastColumn: {type: 'Edm.Boolean', nullable: false},
    legacyId: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    showBandedColumns: {type: 'Edm.Boolean', nullable: false},
    showBandedRows: {type: 'Edm.Boolean', nullable: false},
    showFilterButton: {type: 'Edm.Boolean', nullable: false},
    showHeaders: {type: 'Edm.Boolean', nullable: false},
    showTotals: {type: 'Edm.Boolean', nullable: false},
    style: {type: 'Edm.String'},
    columns: {type: 'graph.workbookTableColumn', collection: true, navigation: true},
    rows: {type: 'graph.workbookTableRow', collection: true, navigation: true},
    sort: {type: 'graph.workbookTableSort', navigation: true},
    worksheet: {type: 'graph.workbookWorksheet', navigation: true}
  }
} as EntityConfig<WorkbookTable>;