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
import { AlternativeSecurityId } from './alternativesecurityid.entity';
import { DirectoryObject } from './directoryobject.entity';
import { Device } from './device.entity';
//#endregion

@Injectable()
export class DevicesService extends ODataService<Device> {
  constructor(protected client: ODataClient) {
    super(client, 'devices', 'microsoft.graph.device');
  }

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public registeredOwners(entity: EntityKey<Device>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('registeredOwners');
  }
  public registeredUsers(entity: EntityKey<Device>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('registeredUsers');
  }
  public transitiveMemberOf(entity: EntityKey<Device>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('transitiveMemberOf');
  }
  //#endregion
}
