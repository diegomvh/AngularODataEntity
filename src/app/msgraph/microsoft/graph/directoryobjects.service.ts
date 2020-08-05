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
import { DirectoryObject } from './directoryobject.entity';
import { ExtensionProperty } from './extensionproperty.entity';
//#endregion

@Injectable()
export class DirectoryObjectsService extends ODataService<DirectoryObject> {
  constructor(protected client: ODataClient) {
    super(client, 'directoryObjects', 'microsoft.graph.directoryObject');
  }

  //#region ODataApi Actions
  public getByIds(): ODataActionResource<{ids: string[], types: string[]}, DirectoryObject> {
    const resource = this.entities().action<{ids: string[], types: string[]}, DirectoryObject>('microsoft.graph.getByIds');
    return resource;
  }
  public getAvailableExtensionProperties(): ODataActionResource<{isSyncedFromOnPremises: boolean}, ExtensionProperty> {
    const resource = this.entities().action<{isSyncedFromOnPremises: boolean}, ExtensionProperty>('microsoft.graph.getAvailableExtensionProperties');
    return resource;
  }
  public validateProperties(): ODataActionResource<{entityType: string, displayName: string, mailNickname: string, onBehalfOfUserId: string}, any> {
    const resource = this.entities().action<{entityType: string, displayName: string, mailNickname: string, onBehalfOfUserId: string}, any>('microsoft.graph.validateProperties');
    return resource;
  }
  public checkMemberGroups(entity: EntityKey<DirectoryObject>): ODataActionResource<{groupIds: string[]}, string> {
    const resource = this.entity(entity).action<{groupIds: string[]}, string>('microsoft.graph.checkMemberGroups');
    return resource;
  }
  public checkMemberObjects(entity: EntityKey<DirectoryObject>): ODataActionResource<{ids: string[]}, string> {
    const resource = this.entity(entity).action<{ids: string[]}, string>('microsoft.graph.checkMemberObjects');
    return resource;
  }
  public getMemberGroups(entity: EntityKey<DirectoryObject>): ODataActionResource<{securityEnabledOnly: boolean}, string> {
    const resource = this.entity(entity).action<{securityEnabledOnly: boolean}, string>('microsoft.graph.getMemberGroups');
    return resource;
  }
  public getMemberObjects(entity: EntityKey<DirectoryObject>): ODataActionResource<{securityEnabledOnly: boolean}, string> {
    const resource = this.entity(entity).action<{securityEnabledOnly: boolean}, string>('microsoft.graph.getMemberObjects');
    return resource;
  }
  public restore(entity: EntityKey<DirectoryObject>): ODataActionResource<null, DirectoryObject> {
    const resource = this.entity(entity).action<null, DirectoryObject>('microsoft.graph.restore');
    return resource;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
