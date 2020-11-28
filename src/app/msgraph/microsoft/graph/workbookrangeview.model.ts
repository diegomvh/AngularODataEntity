import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { Json } from './json.entity';
import { WorkbookRangeView } from './workbookrangeview.entity';
import { JsonModel } from './json.model';
import { JsonCollection } from './json.collection';
import { WorkbookRangeViewCollection } from './workbookrangeview.collection';
//#endregion

export class WorkbookRangeViewModel<E extends WorkbookRangeView> extends EntityModel<E> {
  //#region ODataApi Properties
  cellAddresses?: JsonModel<Json>;
  columnCount: number;
  formulas?: JsonModel<Json>;
  formulasLocal?: JsonModel<Json>;
  formulasR1C1?: JsonModel<Json>;
  index: number;
  numberFormat?: JsonModel<Json>;
  rowCount: number;
  text?: JsonModel<Json>;
  values?: JsonModel<Json>;
  valueTypes?: JsonModel<Json>;
  rows?: WorkbookRangeViewCollection<WorkbookRangeView, WorkbookRangeViewModel<WorkbookRangeView>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}