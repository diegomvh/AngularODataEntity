import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ConditionalAccessUsers } from './conditionalaccessusers.entity';
import { ConditionalAccessUsersCollection } from './conditionalaccessusers.collection';
//#endregion

export class ConditionalAccessUsersModel<E extends ConditionalAccessUsers> extends ODataModel<E> {
  //#region ODataApi Properties
  excludeGroups: string[];
  excludeRoles: string[];
  excludeUsers: string[];
  includeGroups: string[];
  includeRoles: string[];
  includeUsers: string[];
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}