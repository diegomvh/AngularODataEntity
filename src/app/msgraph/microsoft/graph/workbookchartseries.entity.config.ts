import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartSeries } from './workbookchartseries.entity';
import { WorkbookChartSeriesModel } from './workbookchartseries.model';
import { WorkbookChartSeriesCollection } from './workbookchartseries.collection';
//#endregion

export const WorkbookChartSeriesConfig = {
  name: "workbookChartSeries",
  base: "microsoft.graph.entity",
  model: WorkbookChartSeriesModel,
  collection: WorkbookChartSeriesCollection,
  annotations: [],
  fields: {
    name: {type: 'Edm.String'},
    format: {type: 'graph.workbookChartSeriesFormat', navigation: true},
    points: {type: 'graph.workbookChartPoint', collection: true, navigation: true}
  }
} as StructuredTypeConfig<WorkbookChartSeries>;