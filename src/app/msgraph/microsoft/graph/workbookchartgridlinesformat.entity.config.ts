import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartGridlinesFormat } from './workbookchartgridlinesformat.entity';
//#endregion

export const WorkbookChartGridlinesFormatConfig = {
  name: "workbookChartGridlinesFormat",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    line: {type: 'graph.workbookChartLineFormat', navigation: true}
  }
} as EntityConfig<WorkbookChartGridlinesFormat>;