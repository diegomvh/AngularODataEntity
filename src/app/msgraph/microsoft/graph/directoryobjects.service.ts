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
import { DirectoryObject } from './directoryobject.entity';
import { ExtensionProperty } from './extensionproperty.entity';
import { DirectoryObjectModel } from './directoryobject.model';
import { ExtensionPropertyModel } from './extensionproperty.model';
import { DirectoryObjectCollection } from './directoryobject.collection';
import { ExtensionPropertyCollection } from './extensionproperty.collection';
//#endregion

@Injectable()
export class DirectoryObjectsService extends ODataEntityService<DirectoryObject> {
  constructor(protected client: ODataClient) {
    super(client, 'directoryObjects', 'microsoft.graph.directoryObject');
  }

  //#region ODataApi Model
  directoryObjectModel(): DirectoryObjectModel<DirectoryObject> {
    return this.entity().asModel() as DirectoryObjectModel<DirectoryObject>;
  }
  //#endregion
  //#region ODataApi Collection
  directoryObjectCollection(): DirectoryObjectCollection<DirectoryObject, DirectoryObjectModel<DirectoryObject>> {
    return this.entities().asCollection() as DirectoryObjectCollection<DirectoryObject, DirectoryObjectModel<DirectoryObject>>;
  }
  //#endregion
  //#region ODataApi Actions
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
  public getAvailableExtensionProperties(): ODataActionResource<{isSyncedFromOnPremises: boolean}, ExtensionProperty> {
    const resource = this.entities().action<{isSyncedFromOnPremises: boolean}, ExtensionProperty>('microsoft.graph.getAvailableExtensionProperties');
    return resource;
  }
  public getByIds(): ODataActionResource<{ids: string[], types: string[]}, DirectoryObject> {
    const resource = this.entities().action<{ids: string[], types: string[]}, DirectoryObject>('microsoft.graph.getByIds');
    return resource;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
