import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartSeriesFormat } from './workbookchartseriesformat.entity';
//#endregion

export const WorkbookChartSeriesFormatConfig = {
  name: "WorkbookChartSeriesFormat",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    fill: {type: 'graph.workbookChartFill', navigation: true},
    line: {type: 'graph.workbookChartLineFormat', navigation: true}
  }
} as EntityConfig<WorkbookChartSeriesFormat>;