import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookApplication } from './workbookapplication.entity';
//#endregion

export const WorkbookApplicationConfig = {
  name: "workbookApplication",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    calculationMode: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<WorkbookApplication>;