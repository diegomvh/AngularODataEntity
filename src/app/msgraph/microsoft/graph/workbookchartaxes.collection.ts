import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { WorkbookChartAxes } from './workbookchartaxes.entity';
import { WorkbookChartAxis } from './workbookchartaxis.entity';
import { WorkbookChartAxesModel } from './workbookchartaxes.model';
import { WorkbookChartAxisModel } from './workbookchartaxis.model';
import { WorkbookChartAxisCollection } from './workbookchartaxis.collection';
//#endregion

export class WorkbookChartAxesCollection<E extends WorkbookChartAxes, M extends WorkbookChartAxesModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}