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
import { AlternativeSecurityId } from './alternativesecurityid.complex';
import { DirectoryObject } from './directoryobject.entity';
import { Device } from './device.entity';
import { AlternativeSecurityIdModel } from './alternativesecurityid.model';
import { DirectoryObjectModel } from './directoryobject.model';
import { DeviceModel } from './device.model';
import { AlternativeSecurityIdCollection } from './alternativesecurityid.collection';
import { DirectoryObjectCollection } from './directoryobject.collection';
import { DeviceCollection } from './device.collection';
//#endregion

@Injectable()
export class DevicesService extends ODataEntityService<Device> {
  constructor(protected client: ODataClient) {
    super(client, 'devices', 'microsoft.graph.device');
  }

  //#region ODataApi Model
  deviceModel(): DeviceModel<Device> {
    return this.entity().asModel() as DeviceModel<Device>;
  }
  //#endregion
  //#region ODataApi Collection
  deviceCollection(): DeviceCollection<Device, DeviceModel<Device>> {
    return this.entities().asCollection() as DeviceCollection<Device, DeviceModel<Device>>;
  }
  //#endregion
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
