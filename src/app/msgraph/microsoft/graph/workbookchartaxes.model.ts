import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { WorkbookChartAxes } from './workbookchartaxes.entity';
import { WorkbookChartAxis } from './workbookchartaxis.entity';
import { WorkbookChartAxisModel } from './workbookchartaxis.model';
import { WorkbookChartAxesCollection } from './workbookchartaxes.collection';
import { WorkbookChartAxisCollection } from './workbookchartaxis.collection';
//#endregion

export class WorkbookChartAxesModel<E extends WorkbookChartAxes> extends EntityModel<E> {
  //#region ODataApi Properties
  categoryAxis?: WorkbookChartAxisModel<WorkbookChartAxis>;
  seriesAxis?: WorkbookChartAxisModel<WorkbookChartAxis>;
  valueAxis?: WorkbookChartAxisModel<WorkbookChartAxis>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}