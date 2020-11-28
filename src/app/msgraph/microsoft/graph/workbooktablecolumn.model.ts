import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { Json } from './json.complex';
import { WorkbookFilter } from './workbookfilter.entity';
import { WorkbookTableColumn } from './workbooktablecolumn.entity';
import { JsonModel } from './json.model';
import { WorkbookFilterModel } from './workbookfilter.model';
import { JsonCollection } from './json.collection';
import { WorkbookFilterCollection } from './workbookfilter.collection';
import { WorkbookTableColumnCollection } from './workbooktablecolumn.collection';
//#endregion

export class WorkbookTableColumnModel<E extends WorkbookTableColumn> extends EntityModel<E> {
  //#region ODataApi Properties
  index: number;
  name?: string;
  values?: JsonModel<Json>;
  filter?: WorkbookFilterModel<WorkbookFilter>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}