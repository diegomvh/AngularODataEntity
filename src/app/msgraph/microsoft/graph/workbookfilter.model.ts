import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { WorkbookFilterCriteria } from './workbookfiltercriteria.complex';
import { WorkbookFilter } from './workbookfilter.entity';
import { WorkbookFilterCriteriaModel } from './workbookfiltercriteria.model';
import { WorkbookFilterCriteriaCollection } from './workbookfiltercriteria.collection';
import { WorkbookFilterCollection } from './workbookfilter.collection';
//#endregion

export class WorkbookFilterModel<E extends WorkbookFilter> extends EntityModel<E> {
  //#region ODataApi Properties
  criteria?: WorkbookFilterCriteriaModel<WorkbookFilterCriteria>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}