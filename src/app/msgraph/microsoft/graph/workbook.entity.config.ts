import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Workbook } from './workbook.entity';
import { WorkbookModel } from './workbook.model';
import { WorkbookCollection } from './workbook.collection';
//#endregion

export const WorkbookConfig = {
  name: "workbook",
  base: "microsoft.graph.entity",
  model: WorkbookModel,
  collection: WorkbookCollection,
  annotations: [],
  fields: {
    application: {type: 'graph.workbookApplication', navigation: true},
    comments: {type: 'graph.workbookComment', collection: true, navigation: true},
    functions: {type: 'graph.workbookFunctions', navigation: true},
    names: {type: 'graph.workbookNamedItem', collection: true, navigation: true},
    operations: {type: 'graph.workbookOperation', collection: true, navigation: true},
    tables: {type: 'graph.workbookTable', collection: true, navigation: true},
    worksheets: {type: 'graph.workbookWorksheet', collection: true, navigation: true}
  }
} as EntityConfig<Workbook>;