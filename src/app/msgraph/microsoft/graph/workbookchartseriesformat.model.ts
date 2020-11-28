import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { WorkbookChartFill } from './workbookchartfill.entity';
import { WorkbookChartLineFormat } from './workbookchartlineformat.entity';
import { WorkbookChartSeriesFormat } from './workbookchartseriesformat.entity';
import { WorkbookChartFillModel } from './workbookchartfill.model';
import { WorkbookChartLineFormatModel } from './workbookchartlineformat.model';
import { WorkbookChartFillCollection } from './workbookchartfill.collection';
import { WorkbookChartLineFormatCollection } from './workbookchartlineformat.collection';
import { WorkbookChartSeriesFormatCollection } from './workbookchartseriesformat.collection';
//#endregion

export class WorkbookChartSeriesFormatModel<E extends WorkbookChartSeriesFormat> extends EntityModel<E> {
  //#region ODataApi Properties
  fill?: WorkbookChartFillModel<WorkbookChartFill>;
  line?: WorkbookChartLineFormatModel<WorkbookChartLineFormat>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}