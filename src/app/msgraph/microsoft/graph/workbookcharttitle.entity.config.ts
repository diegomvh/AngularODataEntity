import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartTitle } from './workbookcharttitle.entity';
//#endregion

export const WorkbookChartTitleConfig = {
  name: "workbookChartTitle",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    overlay: {type: 'Edm.Boolean'},
    text: {type: 'Edm.String'},
    visible: {type: 'Edm.Boolean', nullable: false},
    format: {type: 'graph.workbookChartTitleFormat', navigation: true}
  }
} as EntityConfig<WorkbookChartTitle>;