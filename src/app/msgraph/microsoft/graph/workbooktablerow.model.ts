import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { Json } from './json.entity';
import { WorkbookTableRow } from './workbooktablerow.entity';
import { JsonModel } from './json.model';
import { JsonCollection } from './json.collection';
import { WorkbookTableRowCollection } from './workbooktablerow.collection';
//#endregion

export class WorkbookTableRowModel<E extends WorkbookTableRow> extends EntityModel<E> {
  //#region ODataApi Properties
  index: number;
  values?: JsonModel<Json>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}