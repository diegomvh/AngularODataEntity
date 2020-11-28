import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookNamedItem } from './workbooknameditem.entity';
import { WorkbookNamedItemModel } from './workbooknameditem.model';
import { WorkbookNamedItemCollection } from './workbooknameditem.collection';
//#endregion

export const WorkbookNamedItemConfig = {
  name: "workbookNamedItem",
  base: "microsoft.graph.entity",
  model: WorkbookNamedItemModel,
  collection: WorkbookNamedItemCollection,
  annotations: [],
  fields: {
    comment: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    scope: {type: 'Edm.String', nullable: false},
    type: {type: 'Edm.String'},
    value: {type: 'graph.Json'},
    visible: {type: 'Edm.Boolean', nullable: false},
    worksheet: {type: 'graph.workbookWorksheet', navigation: true}
  }
} as StructuredTypeConfig<WorkbookNamedItem>;