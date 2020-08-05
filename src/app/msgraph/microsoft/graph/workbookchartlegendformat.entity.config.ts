import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartLegendFormat } from './workbookchartlegendformat.entity';
//#endregion

export const WorkbookChartLegendFormatConfig = {
  name: "WorkbookChartLegendFormat",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    fill: {type: 'graph.workbookChartFill', navigation: true},
    font: {type: 'graph.workbookChartFont', navigation: true}
  }
} as EntityConfig<WorkbookChartLegendFormat>;