import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartAxisFormat } from './workbookchartaxisformat.entity';
//#endregion

export const WorkbookChartAxisFormatConfig = {
  name: "workbookChartAxisFormat",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    font: {type: 'graph.workbookChartFont', navigation: true},
    line: {type: 'graph.workbookChartLineFormat', navigation: true}
  }
} as EntityConfig<WorkbookChartAxisFormat>;