import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ConditionalAccessUsers } from './conditionalaccessusers.entity';
import { ConditionalAccessUsersModel } from './conditionalaccessusers.model';
//#endregion

export class ConditionalAccessUsersCollection<E extends ConditionalAccessUsers, M extends ConditionalAccessUsersModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}