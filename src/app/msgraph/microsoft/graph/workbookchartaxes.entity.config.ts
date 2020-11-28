import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartAxes } from './workbookchartaxes.entity';
import { WorkbookChartAxesModel } from './workbookchartaxes.model';
import { WorkbookChartAxesCollection } from './workbookchartaxes.collection';
//#endregion

export const WorkbookChartAxesConfig = {
  name: "workbookChartAxes",
  base: "microsoft.graph.entity",
  model: WorkbookChartAxesModel,
  collection: WorkbookChartAxesCollection,
  annotations: [],
  fields: {
    categoryAxis: {type: 'graph.workbookChartAxis', navigation: true},
    seriesAxis: {type: 'graph.workbookChartAxis', navigation: true},
    valueAxis: {type: 'graph.workbookChartAxis', navigation: true}
  }
} as EntityConfig<WorkbookChartAxes>;