import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartFill } from './workbookchartfill.entity';
//#endregion

export const WorkbookChartFillConfig = {
  name: "workbookChartFill",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    
  }
} as EntityConfig<WorkbookChartFill>;