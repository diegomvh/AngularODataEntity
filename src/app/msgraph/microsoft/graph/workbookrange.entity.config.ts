import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookRange } from './workbookrange.entity';
import { WorkbookRangeModel } from './workbookrange.model';
import { WorkbookRangeCollection } from './workbookrange.collection';
//#endregion

export const WorkbookRangeConfig = {
  name: "workbookRange",
  base: "microsoft.graph.entity",
  model: WorkbookRangeModel,
  collection: WorkbookRangeCollection,
  annotations: [],
  fields: {
    address: {type: 'Edm.String'},
    addressLocal: {type: 'Edm.String'},
    cellCount: {type: 'Edm.Int32', nullable: false},
    columnCount: {type: 'Edm.Int32', nullable: false},
    columnHidden: {type: 'Edm.Boolean'},
    columnIndex: {type: 'Edm.Int32', nullable: false},
    formulas: {type: 'graph.Json'},
    formulasLocal: {type: 'graph.Json'},
    formulasR1C1: {type: 'graph.Json'},
    hidden: {type: 'Edm.Boolean'},
    numberFormat: {type: 'graph.Json'},
    rowCount: {type: 'Edm.Int32', nullable: false},
    rowHidden: {type: 'Edm.Boolean'},
    rowIndex: {type: 'Edm.Int32', nullable: false},
    text: {type: 'graph.Json'},
    values: {type: 'graph.Json'},
    valueTypes: {type: 'graph.Json'},
    format: {type: 'graph.workbookRangeFormat', navigation: true},
    sort: {type: 'graph.workbookRangeSort', navigation: true},
    worksheet: {type: 'graph.workbookWorksheet', navigation: true}
  }
} as StructuredTypeConfig<WorkbookRange>;