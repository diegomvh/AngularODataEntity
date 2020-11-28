import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { Json } from './json.complex';
import { WorkbookChartPoint } from './workbookchartpoint.entity';
import { WorkbookChartPointFormat } from './workbookchartpointformat.entity';
import { JsonModel } from './json.model';
import { WorkbookChartPointFormatModel } from './workbookchartpointformat.model';
import { JsonCollection } from './json.collection';
import { WorkbookChartPointCollection } from './workbookchartpoint.collection';
import { WorkbookChartPointFormatCollection } from './workbookchartpointformat.collection';
//#endregion

export class WorkbookChartPointModel<E extends WorkbookChartPoint> extends EntityModel<E> {
  //#region ODataApi Properties
  value?: JsonModel<Json>;
  format?: WorkbookChartPointFormatModel<WorkbookChartPointFormat>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}