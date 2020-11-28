import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { WorkbookChartSeries } from './workbookchartseries.entity';
import { WorkbookChartPoint } from './workbookchartpoint.entity';
import { WorkbookChartSeriesFormat } from './workbookchartseriesformat.entity';
import { WorkbookChartSeriesModel } from './workbookchartseries.model';
import { WorkbookChartPointModel } from './workbookchartpoint.model';
import { WorkbookChartSeriesFormatModel } from './workbookchartseriesformat.model';
import { WorkbookChartPointCollection } from './workbookchartpoint.collection';
import { WorkbookChartSeriesFormatCollection } from './workbookchartseriesformat.collection';
//#endregion

export class WorkbookChartSeriesCollection<E extends WorkbookChartSeries, M extends WorkbookChartSeriesModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}