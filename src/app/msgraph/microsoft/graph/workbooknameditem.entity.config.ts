import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookNamedItem } from './workbooknameditem.entity';
//#endregion

export const WorkbookNamedItemConfig = {
  name: "WorkbookNamedItem",
  base: "microsoft.graph.entity",
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
} as EntityConfig<WorkbookNamedItem>;