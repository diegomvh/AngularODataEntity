import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ConditionalAccessApplications } from './conditionalaccessapplications.entity';
import { ConditionalAccessApplicationsCollection } from './conditionalaccessapplications.collection';
//#endregion

export class ConditionalAccessApplicationsModel<E extends ConditionalAccessApplications> extends ODataModel<E> {
  //#region ODataApi Properties
  excludeApplications: string[];
  includeApplications: string[];
  includeUserActions: string[];
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}