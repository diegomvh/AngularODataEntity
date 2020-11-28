import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { WorkbookSortField } from './workbooksortfield.complex';
import { WorkbookTableSort } from './workbooktablesort.entity';
import { WorkbookSortFieldModel } from './workbooksortfield.model';
import { WorkbookSortFieldCollection } from './workbooksortfield.collection';
import { WorkbookTableSortCollection } from './workbooktablesort.collection';
//#endregion

export class WorkbookTableSortModel<E extends WorkbookTableSort> extends EntityModel<E> {
  //#region ODataApi Properties
  fields?: WorkbookSortFieldCollection<WorkbookSortField, WorkbookSortFieldModel<WorkbookSortField>>;
  matchCase: boolean;
  method: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}