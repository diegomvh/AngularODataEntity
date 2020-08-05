import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartSeries } from './workbookchartseries.entity';
//#endregion

export const WorkbookChartSeriesConfig = {
  name: "WorkbookChartSeries",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    name: {type: 'Edm.String'},
    format: {type: 'graph.workbookChartSeriesFormat', navigation: true},
    points: {type: 'graph.workbookChartPoint', collection: true, navigation: true}
  }
} as EntityConfig<WorkbookChartSeries>;