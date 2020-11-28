import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookRangeBorder } from './workbookrangeborder.entity';
import { WorkbookRangeBorderModel } from './workbookrangeborder.model';
import { WorkbookRangeBorderCollection } from './workbookrangeborder.collection';
//#endregion

export const WorkbookRangeBorderConfig = {
  name: "workbookRangeBorder",
  base: "microsoft.graph.entity",
  model: WorkbookRangeBorderModel,
  collection: WorkbookRangeBorderCollection,
  annotations: [],
  fields: {
    color: {type: 'Edm.String'},
    sideIndex: {type: 'Edm.String'},
    style: {type: 'Edm.String'},
    weight: {type: 'Edm.String'}
  }
} as EntityConfig<WorkbookRangeBorder>;