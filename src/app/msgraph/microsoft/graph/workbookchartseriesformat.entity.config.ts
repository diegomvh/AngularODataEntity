import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartSeriesFormat } from './workbookchartseriesformat.entity';
import { WorkbookChartSeriesFormatModel } from './workbookchartseriesformat.model';
import { WorkbookChartSeriesFormatCollection } from './workbookchartseriesformat.collection';
//#endregion

export const WorkbookChartSeriesFormatConfig = {
  name: "workbookChartSeriesFormat",
  base: "microsoft.graph.entity",
  model: WorkbookChartSeriesFormatModel,
  collection: WorkbookChartSeriesFormatCollection,
  annotations: [],
  fields: {
    fill: {type: 'graph.workbookChartFill', navigation: true},
    line: {type: 'graph.workbookChartLineFormat', navigation: true}
  }
} as EntityConfig<WorkbookChartSeriesFormat>;