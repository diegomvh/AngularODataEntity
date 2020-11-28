import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartAxisTitleFormat } from './workbookchartaxistitleformat.entity';
import { WorkbookChartAxisTitleFormatModel } from './workbookchartaxistitleformat.model';
import { WorkbookChartAxisTitleFormatCollection } from './workbookchartaxistitleformat.collection';
//#endregion

export const WorkbookChartAxisTitleFormatConfig = {
  name: "workbookChartAxisTitleFormat",
  base: "microsoft.graph.entity",
  model: WorkbookChartAxisTitleFormatModel,
  collection: WorkbookChartAxisTitleFormatCollection,
  annotations: [],
  fields: {
    font: {type: 'graph.workbookChartFont', navigation: true}
  }
} as EntityConfig<WorkbookChartAxisTitleFormat>;