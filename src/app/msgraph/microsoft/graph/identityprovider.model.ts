import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { IdentityProvider } from './identityprovider.entity';
import { IdentityProviderCollection } from './identityprovider.collection';
//#endregion

export class IdentityProviderModel<E extends IdentityProvider> extends EntityModel<E> {
  //#region ODataApi Properties
  clientId?: string;
  clientSecret?: string;
  name?: string;
  type?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}