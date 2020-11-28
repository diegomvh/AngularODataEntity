import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartDataLabels } from './workbookchartdatalabels.entity';
import { WorkbookChartDataLabelsModel } from './workbookchartdatalabels.model';
import { WorkbookChartDataLabelsCollection } from './workbookchartdatalabels.collection';
//#endregion

export const WorkbookChartDataLabelsConfig = {
  name: "workbookChartDataLabels",
  base: "microsoft.graph.entity",
  model: WorkbookChartDataLabelsModel,
  collection: WorkbookChartDataLabelsCollection,
  annotations: [],
  fields: {
    position: {type: 'Edm.String'},
    separator: {type: 'Edm.String'},
    showBubbleSize: {type: 'Edm.Boolean'},
    showCategoryName: {type: 'Edm.Boolean'},
    showLegendKey: {type: 'Edm.Boolean'},
    showPercentage: {type: 'Edm.Boolean'},
    showSeriesName: {type: 'Edm.Boolean'},
    showValue: {type: 'Edm.Boolean'},
    format: {type: 'graph.workbookChartDataLabelFormat', navigation: true}
  }
} as EntityConfig<WorkbookChartDataLabels>;