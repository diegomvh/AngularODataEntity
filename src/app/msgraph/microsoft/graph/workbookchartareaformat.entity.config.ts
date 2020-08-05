import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartAreaFormat } from './workbookchartareaformat.entity';
//#endregion

export const WorkbookChartAreaFormatConfig = {
  name: "WorkbookChartAreaFormat",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    fill: {type: 'graph.workbookChartFill', navigation: true},
    font: {type: 'graph.workbookChartFont', navigation: true}
  }
} as EntityConfig<WorkbookChartAreaFormat>;