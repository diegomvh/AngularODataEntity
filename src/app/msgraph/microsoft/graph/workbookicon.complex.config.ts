import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookIcon } from './workbookicon.complex';
import { WorkbookIconModel } from './workbookicon.model';
import { WorkbookIconCollection } from './workbookicon.collection';
//#endregion

export const WorkbookIconConfig = {
  name: "workbookIcon",
  model: WorkbookIconModel,
  collection: WorkbookIconCollection,
  annotations: [],
  fields: {
    index: {type: 'Edm.Int32', nullable: false},
    set: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<WorkbookIcon>;