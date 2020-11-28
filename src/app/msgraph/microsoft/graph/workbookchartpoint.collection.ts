import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { Json } from './json.entity';
import { WorkbookChartPoint } from './workbookchartpoint.entity';
import { WorkbookChartPointFormat } from './workbookchartpointformat.entity';
import { JsonModel } from './json.model';
import { WorkbookChartPointModel } from './workbookchartpoint.model';
import { WorkbookChartPointFormatModel } from './workbookchartpointformat.model';
import { JsonCollection } from './json.collection';
import { WorkbookChartPointFormatCollection } from './workbookchartpointformat.collection';
//#endregion

export class WorkbookChartPointCollection<E extends WorkbookChartPoint, M extends WorkbookChartPointModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}