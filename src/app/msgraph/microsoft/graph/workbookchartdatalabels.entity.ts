import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookChartDataLabelFormat } from './workbookchartdatalabelformat.entity';
//#endregion

export interface WorkbookChartDataLabels extends Entity {
  //#region ODataApi Properties
  position?: string;
  separator?: string;
  showBubbleSize?: boolean;
  showCategoryName?: boolean;
  showLegendKey?: boolean;
  showPercentage?: boolean;
  showSeriesName?: boolean;
  showValue?: boolean;
  format?: WorkbookChartDataLabelFormat;
  //#endregion
}