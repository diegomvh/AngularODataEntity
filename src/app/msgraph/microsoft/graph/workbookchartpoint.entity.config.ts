import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartPoint } from './workbookchartpoint.entity';
//#endregion

export const WorkbookChartPointConfig = {
  name: "workbookChartPoint",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    value: {type: 'graph.Json'},
    format: {type: 'graph.workbookChartPointFormat', navigation: true}
  }
} as EntityConfig<WorkbookChartPoint>;