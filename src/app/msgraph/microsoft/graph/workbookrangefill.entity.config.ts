import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookRangeFill } from './workbookrangefill.entity';
import { WorkbookRangeFillModel } from './workbookrangefill.model';
import { WorkbookRangeFillCollection } from './workbookrangefill.collection';
//#endregion

export const WorkbookRangeFillConfig = {
  name: "workbookRangeFill",
  base: "microsoft.graph.entity",
  model: WorkbookRangeFillModel,
  collection: WorkbookRangeFillCollection,
  annotations: [],
  fields: {
    color: {type: 'Edm.String'}
  }
} as EntityConfig<WorkbookRangeFill>;