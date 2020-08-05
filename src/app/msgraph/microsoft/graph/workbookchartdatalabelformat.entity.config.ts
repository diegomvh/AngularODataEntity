import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartDataLabelFormat } from './workbookchartdatalabelformat.entity';
//#endregion

export const WorkbookChartDataLabelFormatConfig = {
  name: "WorkbookChartDataLabelFormat",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    fill: {type: 'graph.workbookChartFill', navigation: true},
    font: {type: 'graph.workbookChartFont', navigation: true}
  }
} as EntityConfig<WorkbookChartDataLabelFormat>;