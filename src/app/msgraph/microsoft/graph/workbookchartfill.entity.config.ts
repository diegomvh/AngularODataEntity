import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartFill } from './workbookchartfill.entity';
import { WorkbookChartFillModel } from './workbookchartfill.model';
import { WorkbookChartFillCollection } from './workbookchartfill.collection';
//#endregion

export const WorkbookChartFillConfig = {
  name: "workbookChartFill",
  base: "microsoft.graph.entity",
  model: WorkbookChartFillModel,
  collection: WorkbookChartFillCollection,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<WorkbookChartFill>;