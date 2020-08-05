import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookSortField } from './workbooksortfield.entity';
//#endregion

export const WorkbookSortFieldConfig = {
  name: "WorkbookSortField",
  annotations: [],
  fields: {
    ascending: {type: 'Edm.Boolean', nullable: false},
    color: {type: 'Edm.String'},
    dataOption: {type: 'Edm.String', nullable: false},
    icon: {type: 'graph.workbookIcon'},
    key: {type: 'Edm.Int32', nullable: false},
    sortOn: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<WorkbookSortField>;