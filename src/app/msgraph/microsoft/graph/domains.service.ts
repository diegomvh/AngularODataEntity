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
import { DomainState } from './domainstate.entity';
import { DirectoryObject } from './directoryobject.entity';
import { Domain } from './domain.entity';
//#endregion

@Injectable()
export class DomainsService extends ODataEntityService<Domain> {
  constructor(protected client: ODataClient) {
    super(client, 'domains', 'microsoft.graph.domain');
  }

  //#region ODataApi Actions
  public forceDelete(entity: EntityKey<Domain>): ODataActionResource<{disableUserAccounts: boolean}, any> {
    const resource = this.entity(entity).action<{disableUserAccounts: boolean}, any>('microsoft.graph.forceDelete');
    return resource;
  }
  public verify(entity: EntityKey<Domain>): ODataActionResource<null, Domain> {
    const resource = this.entity(entity).action<null, Domain>('microsoft.graph.verify');
    return resource;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public domainNameReferences(entity: EntityKey<Domain>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('domainNameReferences');
  }
  //#endregion
}
