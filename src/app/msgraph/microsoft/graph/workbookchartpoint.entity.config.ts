import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartPoint } from './workbookchartpoint.entity';
import { WorkbookChartPointModel } from './workbookchartpoint.model';
import { WorkbookChartPointCollection } from './workbookchartpoint.collection';
//#endregion

export const WorkbookChartPointConfig = {
  name: "workbookChartPoint",
  base: "microsoft.graph.entity",
  model: WorkbookChartPointModel,
  collection: WorkbookChartPointCollection,
  annotations: [],
  fields: {
    value: {type: 'graph.Json'},
    format: {type: 'graph.workbookChartPointFormat', navigation: true}
  }
} as EntityConfig<WorkbookChartPoint>;