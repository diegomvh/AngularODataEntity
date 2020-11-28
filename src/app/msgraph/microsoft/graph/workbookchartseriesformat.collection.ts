import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { WorkbookChartFill } from './workbookchartfill.entity';
import { WorkbookChartLineFormat } from './workbookchartlineformat.entity';
import { WorkbookChartSeriesFormat } from './workbookchartseriesformat.entity';
import { WorkbookChartFillModel } from './workbookchartfill.model';
import { WorkbookChartLineFormatModel } from './workbookchartlineformat.model';
import { WorkbookChartSeriesFormatModel } from './workbookchartseriesformat.model';
import { WorkbookChartFillCollection } from './workbookchartfill.collection';
import { WorkbookChartLineFormatCollection } from './workbookchartlineformat.collection';
//#endregion

export class WorkbookChartSeriesFormatCollection<E extends WorkbookChartSeriesFormat, M extends WorkbookChartSeriesFormatModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}