import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartAxes } from './workbookchartaxes.entity';
//#endregion

export const WorkbookChartAxesConfig = {
  name: "WorkbookChartAxes",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    categoryAxis: {type: 'graph.workbookChartAxis', navigation: true},
    seriesAxis: {type: 'graph.workbookChartAxis', navigation: true},
    valueAxis: {type: 'graph.workbookChartAxis', navigation: true}
  }
} as EntityConfig<WorkbookChartAxes>;