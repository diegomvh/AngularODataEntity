import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WorkbookIcon } from './workbookicon.entity';
import { WorkbookSortField } from './workbooksortfield.entity';
import { WorkbookIconModel } from './workbookicon.model';
import { WorkbookSortFieldModel } from './workbooksortfield.model';
import { WorkbookIconCollection } from './workbookicon.collection';
//#endregion

export class WorkbookSortFieldCollection<E extends WorkbookSortField, M extends WorkbookSortFieldModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}