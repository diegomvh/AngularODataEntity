import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookChartPoint } from './workbookchartpoint.entity';
import { WorkbookChartSeriesFormat } from './workbookchartseriesformat.entity';
import { EntityModel } from './entity.model';
import { WorkbookChartPointModel } from './workbookchartpoint.model';
import { WorkbookChartSeriesFormatModel } from './workbookchartseriesformat.model';
import { EntityCollection } from './entity.collection';
import { WorkbookChartPointCollection } from './workbookchartpoint.collection';
import { WorkbookChartSeriesFormatCollection } from './workbookchartseriesformat.collection';
//#endregion

export interface WorkbookChartSeries extends Entity {
  //#region ODataApi Properties
  name?: string;
  format?: WorkbookChartSeriesFormat;
  points?: WorkbookChartPoint[];
  //#endregion
}