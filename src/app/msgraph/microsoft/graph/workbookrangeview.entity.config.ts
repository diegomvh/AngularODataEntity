import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookRangeView } from './workbookrangeview.entity';
import { WorkbookRangeViewModel } from './workbookrangeview.model';
import { WorkbookRangeViewCollection } from './workbookrangeview.collection';
//#endregion

export const WorkbookRangeViewConfig = {
  name: "workbookRangeView",
  base: "microsoft.graph.entity",
  model: WorkbookRangeViewModel,
  collection: WorkbookRangeViewCollection,
  annotations: [],
  fields: {
    cellAddresses: {type: 'graph.Json'},
    columnCount: {type: 'Edm.Int32', nullable: false},
    formulas: {type: 'graph.Json'},
    formulasLocal: {type: 'graph.Json'},
    formulasR1C1: {type: 'graph.Json'},
    index: {type: 'Edm.Int32', nullable: false},
    numberFormat: {type: 'graph.Json'},
    rowCount: {type: 'Edm.Int32', nullable: false},
    text: {type: 'graph.Json'},
    values: {type: 'graph.Json'},
    valueTypes: {type: 'graph.Json'},
    rows: {type: 'graph.workbookRangeView', collection: true, navigation: true}
  }
} as StructuredTypeConfig<WorkbookRangeView>;