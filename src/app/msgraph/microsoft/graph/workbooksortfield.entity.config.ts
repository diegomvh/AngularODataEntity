import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookSortField } from './workbooksortfield.entity';
import { WorkbookSortFieldModel } from './workbooksortfield.model';
import { WorkbookSortFieldCollection } from './workbooksortfield.collection';
//#endregion

export const WorkbookSortFieldConfig = {
  name: "workbookSortField",
  model: WorkbookSortFieldModel,
  collection: WorkbookSortFieldCollection,
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