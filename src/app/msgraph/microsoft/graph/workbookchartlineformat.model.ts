import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { WorkbookChartLineFormat } from './workbookchartlineformat.entity';
import { WorkbookChartLineFormatCollection } from './workbookchartlineformat.collection';
//#endregion

export class WorkbookChartLineFormatModel<E extends WorkbookChartLineFormat> extends EntityModel<E> {
  //#region ODataApi Properties
  color?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}