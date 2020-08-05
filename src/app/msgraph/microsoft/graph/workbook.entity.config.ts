import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Workbook } from './workbook.entity';
//#endregion

export const WorkbookConfig = {
  name: "Workbook",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    application: {type: 'graph.workbookApplication', navigation: true},
    names: {type: 'graph.workbookNamedItem', collection: true, navigation: true},
    tables: {type: 'graph.workbookTable', collection: true, navigation: true},
    worksheets: {type: 'graph.workbookWorksheet', collection: true, navigation: true},
    comments: {type: 'graph.workbookComment', collection: true, navigation: true},
    functions: {type: 'graph.workbookFunctions', navigation: true},
    operations: {type: 'graph.workbookOperation', collection: true, navigation: true}
  }
} as EntityConfig<Workbook>;