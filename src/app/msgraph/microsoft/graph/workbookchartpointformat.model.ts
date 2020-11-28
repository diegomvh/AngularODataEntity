import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { WorkbookChartFill } from './workbookchartfill.entity';
import { WorkbookChartPointFormat } from './workbookchartpointformat.entity';
import { WorkbookChartFillModel } from './workbookchartfill.model';
import { WorkbookChartFillCollection } from './workbookchartfill.collection';
import { WorkbookChartPointFormatCollection } from './workbookchartpointformat.collection';
//#endregion

export class WorkbookChartPointFormatModel<E extends WorkbookChartPointFormat> extends EntityModel<E> {
  //#region ODataApi Properties
  fill?: WorkbookChartFillModel<WorkbookChartFill>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}