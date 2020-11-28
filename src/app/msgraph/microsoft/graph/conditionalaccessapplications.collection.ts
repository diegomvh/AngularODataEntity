import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ConditionalAccessApplications } from './conditionalaccessapplications.complex';
import { ConditionalAccessApplicationsModel } from './conditionalaccessapplications.model';
//#endregion

export class ConditionalAccessApplicationsCollection<E extends ConditionalAccessApplications, M extends ConditionalAccessApplicationsModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}