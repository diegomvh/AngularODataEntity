import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookRangeView } from './workbookrangeview.entity';
//#endregion

export const WorkbookRangeViewConfig = {
  name: "WorkbookRangeView",
  base: "microsoft.graph.entity",
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
    valueTypes: {type: 'graph.Json'},
    values: {type: 'graph.Json'},
    rows: {type: 'graph.workbookRangeView', collection: true, navigation: true}
  }
} as EntityConfig<WorkbookRangeView>;