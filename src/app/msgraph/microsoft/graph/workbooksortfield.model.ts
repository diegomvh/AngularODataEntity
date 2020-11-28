import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WorkbookIcon } from './workbookicon.entity';
import { WorkbookSortField } from './workbooksortfield.entity';
import { WorkbookIconModel } from './workbookicon.model';
import { WorkbookIconCollection } from './workbookicon.collection';
import { WorkbookSortFieldCollection } from './workbooksortfield.collection';
//#endregion

export class WorkbookSortFieldModel<E extends WorkbookSortField> extends ODataModel<E> {
  //#region ODataApi Properties
  ascending: boolean;
  color?: string;
  dataOption: string;
  icon?: WorkbookIconModel<WorkbookIcon>;
  key: number;
  sortOn: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}