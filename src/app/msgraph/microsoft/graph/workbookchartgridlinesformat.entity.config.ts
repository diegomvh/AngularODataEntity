import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartGridlinesFormat } from './workbookchartgridlinesformat.entity';
import { WorkbookChartGridlinesFormatModel } from './workbookchartgridlinesformat.model';
import { WorkbookChartGridlinesFormatCollection } from './workbookchartgridlinesformat.collection';
//#endregion

export const WorkbookChartGridlinesFormatConfig = {
  name: "workbookChartGridlinesFormat",
  base: "microsoft.graph.entity",
  model: WorkbookChartGridlinesFormatModel,
  collection: WorkbookChartGridlinesFormatCollection,
  annotations: [],
  fields: {
    line: {type: 'graph.workbookChartLineFormat', navigation: true}
  }
} as StructuredTypeConfig<WorkbookChartGridlinesFormat>;