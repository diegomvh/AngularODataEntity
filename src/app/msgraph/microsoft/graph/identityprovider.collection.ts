import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { IdentityProvider } from './identityprovider.entity';
import { IdentityProviderModel } from './identityprovider.model';
//#endregion

export class IdentityProviderCollection<E extends IdentityProvider, M extends IdentityProviderModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}