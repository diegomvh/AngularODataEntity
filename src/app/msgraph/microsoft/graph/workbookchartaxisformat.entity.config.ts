import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartAxisFormat } from './workbookchartaxisformat.entity';
import { WorkbookChartAxisFormatModel } from './workbookchartaxisformat.model';
import { WorkbookChartAxisFormatCollection } from './workbookchartaxisformat.collection';
//#endregion

export const WorkbookChartAxisFormatConfig = {
  name: "workbookChartAxisFormat",
  base: "microsoft.graph.entity",
  model: WorkbookChartAxisFormatModel,
  collection: WorkbookChartAxisFormatCollection,
  annotations: [],
  fields: {
    font: {type: 'graph.workbookChartFont', navigation: true},
    line: {type: 'graph.workbookChartLineFormat', navigation: true}
  }
} as EntityConfig<WorkbookChartAxisFormat>;