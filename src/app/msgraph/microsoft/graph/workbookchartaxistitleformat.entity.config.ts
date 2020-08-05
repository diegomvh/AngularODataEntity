import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartAxisTitleFormat } from './workbookchartaxistitleformat.entity';
//#endregion

export const WorkbookChartAxisTitleFormatConfig = {
  name: "workbookChartAxisTitleFormat",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    font: {type: 'graph.workbookChartFont', navigation: true}
  }
} as EntityConfig<WorkbookChartAxisTitleFormat>;