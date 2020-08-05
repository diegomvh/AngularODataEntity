import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookWorksheet } from './workbookworksheet.entity';
import { WorkbookChartAxes } from './workbookchartaxes.entity';
import { WorkbookChartDataLabels } from './workbookchartdatalabels.entity';
import { WorkbookChartAreaFormat } from './workbookchartareaformat.entity';
import { WorkbookChartLegend } from './workbookchartlegend.entity';
import { WorkbookChartSeries } from './workbookchartseries.entity';
import { WorkbookChartTitle } from './workbookcharttitle.entity';
//#endregion

export interface WorkbookChart extends Entity {
  //#region ODataApi Properties
  height: number;
  left: number;
  name?: string;
  top: number;
  width: number;
  axes?: WorkbookChartAxes;
  dataLabels?: WorkbookChartDataLabels;
  format?: WorkbookChartAreaFormat;
  legend?: WorkbookChartLegend;
  series?: WorkbookChartSeries[];
  title?: WorkbookChartTitle;
  worksheet?: WorkbookWorksheet;
  //#endregion
}