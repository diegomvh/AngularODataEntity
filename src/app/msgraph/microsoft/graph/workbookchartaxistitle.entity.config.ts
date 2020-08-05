import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartAxisTitle } from './workbookchartaxistitle.entity';
//#endregion

export const WorkbookChartAxisTitleConfig = {
  name: "workbookChartAxisTitle",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    text: {type: 'Edm.String'},
    visible: {type: 'Edm.Boolean', nullable: false},
    format: {type: 'graph.workbookChartAxisTitleFormat', navigation: true}
  }
} as EntityConfig<WorkbookChartAxisTitle>;