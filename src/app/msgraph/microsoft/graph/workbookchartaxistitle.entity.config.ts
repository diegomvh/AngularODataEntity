import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartAxisTitle } from './workbookchartaxistitle.entity';
import { WorkbookChartAxisTitleModel } from './workbookchartaxistitle.model';
import { WorkbookChartAxisTitleCollection } from './workbookchartaxistitle.collection';
//#endregion

export const WorkbookChartAxisTitleConfig = {
  name: "workbookChartAxisTitle",
  base: "microsoft.graph.entity",
  model: WorkbookChartAxisTitleModel,
  collection: WorkbookChartAxisTitleCollection,
  annotations: [],
  fields: {
    text: {type: 'Edm.String'},
    visible: {type: 'Edm.Boolean', nullable: false},
    format: {type: 'graph.workbookChartAxisTitleFormat', navigation: true}
  }
} as StructuredTypeConfig<WorkbookChartAxisTitle>;