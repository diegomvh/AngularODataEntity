import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartTitle } from './workbookcharttitle.entity';
import { WorkbookChartTitleModel } from './workbookcharttitle.model';
import { WorkbookChartTitleCollection } from './workbookcharttitle.collection';
//#endregion

export const WorkbookChartTitleConfig = {
  name: "workbookChartTitle",
  base: "microsoft.graph.entity",
  model: WorkbookChartTitleModel,
  collection: WorkbookChartTitleCollection,
  annotations: [],
  fields: {
    overlay: {type: 'Edm.Boolean'},
    text: {type: 'Edm.String'},
    visible: {type: 'Edm.Boolean', nullable: false},
    format: {type: 'graph.workbookChartTitleFormat', navigation: true}
  }
} as StructuredTypeConfig<WorkbookChartTitle>;