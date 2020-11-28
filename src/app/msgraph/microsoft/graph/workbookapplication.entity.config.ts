import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookApplication } from './workbookapplication.entity';
import { WorkbookApplicationModel } from './workbookapplication.model';
import { WorkbookApplicationCollection } from './workbookapplication.collection';
//#endregion

export const WorkbookApplicationConfig = {
  name: "workbookApplication",
  base: "microsoft.graph.entity",
  model: WorkbookApplicationModel,
  collection: WorkbookApplicationCollection,
  annotations: [],
  fields: {
    calculationMode: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<WorkbookApplication>;