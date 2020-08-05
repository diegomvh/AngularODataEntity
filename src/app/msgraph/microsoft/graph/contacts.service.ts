import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataService, 
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
import { OnPremisesProvisioningError } from './onpremisesprovisioningerror.entity';
import { PhysicalOfficeAddress } from './physicalofficeaddress.entity';
import { Phone } from './phone.entity';
import { DirectoryObject } from './directoryobject.entity';
import { OrgContact } from './orgcontact.entity';
//#endregion

@Injectable()
export class ContactsService extends ODataService<OrgContact> {
  constructor(protected client: ODataClient) {
    super(client, 'contacts', 'microsoft.graph.orgContact');
  }

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public delta(): ODataFunctionResource<null, OrgContact> {
    const resource = this.entities().function<null, OrgContact>('microsoft.graph.delta');
    return resource;
  }
  //#endregion
  //#region ODataApi Navigations
  public directReports(entity: EntityKey<OrgContact>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('directReports');
  }
  public manager(entity: EntityKey<OrgContact>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('manager');
  }
  public memberOf(entity: EntityKey<OrgContact>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('memberOf');
  }
  public transitiveMemberOf(entity: EntityKey<OrgContact>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('transitiveMemberOf');
  }
  //#endregion
}
