import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { WorkbookChartFill } from './workbookchartfill.entity';
import { WorkbookChartFillModel } from './workbookchartfill.model';
//#endregion

export class WorkbookChartFillCollection<E extends WorkbookChartFill, M extends WorkbookChartFillModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}