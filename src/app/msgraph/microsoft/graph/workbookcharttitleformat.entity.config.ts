import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartTitleFormat } from './workbookcharttitleformat.entity';
//#endregion

export const WorkbookChartTitleFormatConfig = {
  name: "workbookChartTitleFormat",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    fill: {type: 'graph.workbookChartFill', navigation: true},
    font: {type: 'graph.workbookChartFont', navigation: true}
  }
} as EntityConfig<WorkbookChartTitleFormat>;