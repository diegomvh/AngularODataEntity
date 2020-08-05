import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartPointFormat } from './workbookchartpointformat.entity';
//#endregion

export const WorkbookChartPointFormatConfig = {
  name: "workbookChartPointFormat",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    fill: {type: 'graph.workbookChartFill', navigation: true}
  }
} as EntityConfig<WorkbookChartPointFormat>;