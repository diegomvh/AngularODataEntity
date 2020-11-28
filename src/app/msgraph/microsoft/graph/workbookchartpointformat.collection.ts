import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { WorkbookChartFill } from './workbookchartfill.entity';
import { WorkbookChartPointFormat } from './workbookchartpointformat.entity';
import { WorkbookChartFillModel } from './workbookchartfill.model';
import { WorkbookChartPointFormatModel } from './workbookchartpointformat.model';
import { WorkbookChartFillCollection } from './workbookchartfill.collection';
//#endregion

export class WorkbookChartPointFormatCollection<E extends WorkbookChartPointFormat, M extends WorkbookChartPointFormatModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}