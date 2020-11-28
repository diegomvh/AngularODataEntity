import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntityService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { IdentityProvider } from './identityprovider.entity';
import { IdentityProviderModel } from './identityprovider.model';
import { IdentityProviderCollection } from './identityprovider.collection';
//#endregion

@Injectable()
export class IdentityProvidersService extends ODataEntityService<IdentityProvider> {
  constructor(protected client: ODataClient) {
    super(client, 'identityProviders', 'microsoft.graph.identityProvider');
  }

  //#region ODataApi Model
  identityProviderModel(): IdentityProviderModel<IdentityProvider> {
    return super.model() as IdentityProviderModel<IdentityProvider>;
  }
  //#endregion
  //#region ODataApi Collection
  identityProviderCollection(): IdentityProviderCollection<IdentityProvider, IdentityProviderModel<IdentityProvider>> {
    return super.collection() as IdentityProviderCollection<IdentityProvider, IdentityProviderModel<IdentityProvider>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
