import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { UserIdentity } from './useridentity.entity';
import { UserIdentityModel } from './useridentity.model';
//#endregion

export class UserIdentityCollection<E extends UserIdentity, M extends UserIdentityModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}