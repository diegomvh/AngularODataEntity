import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Json } from './json.entity';
import { WorkbookFilterCriteria } from './workbookfiltercriteria.entity';
import { WorkbookIcon } from './workbookicon.entity';
import { JsonModel } from './json.model';
import { WorkbookIconModel } from './workbookicon.model';
import { JsonCollection } from './json.collection';
import { WorkbookFilterCriteriaCollection } from './workbookfiltercriteria.collection';
import { WorkbookIconCollection } from './workbookicon.collection';
//#endregion

export class WorkbookFilterCriteriaModel<E extends WorkbookFilterCriteria> extends ODataModel<E> {
  //#region ODataApi Properties
  color?: string;
  criterion1?: string;
  criterion2?: string;
  dynamicCriteria: string;
  filterOn: string;
  icon?: WorkbookIconModel<WorkbookIcon>;
  operator: string;
  values?: JsonModel<Json>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}