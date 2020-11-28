import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Json } from './json.complex';
import { WorkbookFilterCriteria } from './workbookfiltercriteria.complex';
import { WorkbookIcon } from './workbookicon.complex';
import { JsonModel } from './json.model';
import { WorkbookFilterCriteriaModel } from './workbookfiltercriteria.model';
import { WorkbookIconModel } from './workbookicon.model';
import { JsonCollection } from './json.collection';
import { WorkbookIconCollection } from './workbookicon.collection';
//#endregion

export class WorkbookFilterCriteriaCollection<E extends WorkbookFilterCriteria, M extends WorkbookFilterCriteriaModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}