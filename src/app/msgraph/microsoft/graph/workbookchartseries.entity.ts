import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookChartPoint } from './workbookchartpoint.entity';
import { WorkbookChartSeriesFormat } from './workbookchartseriesformat.entity';
//#endregion

export interface WorkbookChartSeries extends Entity {
  //#region ODataApi Properties
  name?: string;
  format?: WorkbookChartSeriesFormat;
  points?: WorkbookChartPoint[];
  //#endregion
}