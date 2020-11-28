import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Identity } from './identity.entity';
import { IdentitySet } from './identityset.entity';
import { IdentityModel } from './identity.model';
import { IdentitySetModel } from './identityset.model';
import { IdentityCollection } from './identity.collection';
//#endregion

export class IdentitySetCollection<E extends IdentitySet, M extends IdentitySetModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}