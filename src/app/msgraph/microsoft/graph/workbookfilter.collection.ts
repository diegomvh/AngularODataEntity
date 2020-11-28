import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { WorkbookFilterCriteria } from './workbookfiltercriteria.complex';
import { WorkbookFilter } from './workbookfilter.entity';
import { WorkbookFilterCriteriaModel } from './workbookfiltercriteria.model';
import { WorkbookFilterModel } from './workbookfilter.model';
import { WorkbookFilterCriteriaCollection } from './workbookfiltercriteria.collection';
//#endregion

export class WorkbookFilterCollection<E extends WorkbookFilter, M extends WorkbookFilterModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}