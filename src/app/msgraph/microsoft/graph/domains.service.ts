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
import { DomainStateModel } from './domainstate.model';
import { DirectoryObjectModel } from './directoryobject.model';
import { DomainModel } from './domain.model';
import { DomainStateCollection } from './domainstate.collection';
import { DirectoryObjectCollection } from './directoryobject.collection';
import { DomainCollection } from './domain.collection';
//#endregion

@Injectable()
export class DomainsService extends ODataEntityService<Domain> {
  constructor(protected client: ODataClient) {
    super(client, 'domains', 'microsoft.graph.domain');
  }

  //#region ODataApi Model
  domainModel(): DomainModel<Domain> {
    return super.model() as DomainModel<Domain>;
  }
  //#endregion
  //#region ODataApi Collection
  domainCollection(): DomainCollection<Domain, DomainModel<Domain>> {
    return super.collection() as DomainCollection<Domain, DomainModel<Domain>>;
  }
  //#endregion
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
