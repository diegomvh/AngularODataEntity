import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartLineFormat } from './workbookchartlineformat.entity';
//#endregion

export const WorkbookChartLineFormatConfig = {
  name: "workbookChartLineFormat",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    color: {type: 'Edm.String'}
  }
} as EntityConfig<WorkbookChartLineFormat>;