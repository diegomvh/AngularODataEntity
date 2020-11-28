import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { WorkbookChartSeries } from './workbookchartseries.entity';
import { WorkbookChartPoint } from './workbookchartpoint.entity';
import { WorkbookChartSeriesFormat } from './workbookchartseriesformat.entity';
import { WorkbookChartPointModel } from './workbookchartpoint.model';
import { WorkbookChartSeriesFormatModel } from './workbookchartseriesformat.model';
import { WorkbookChartSeriesCollection } from './workbookchartseries.collection';
import { WorkbookChartPointCollection } from './workbookchartpoint.collection';
import { WorkbookChartSeriesFormatCollection } from './workbookchartseriesformat.collection';
//#endregion

export class WorkbookChartSeriesModel<E extends WorkbookChartSeries> extends EntityModel<E> {
  //#region ODataApi Properties
  name?: string;
  format?: WorkbookChartSeriesFormatModel<WorkbookChartSeriesFormat>;
  points?: WorkbookChartPointCollection<WorkbookChartPoint, WorkbookChartPointModel<WorkbookChartPoint>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}