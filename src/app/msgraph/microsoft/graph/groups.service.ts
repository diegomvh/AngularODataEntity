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
import { AssignedLicense } from './assignedlicense.entity';
import { OnPremisesProvisioningError } from './onpremisesprovisioningerror.entity';
import { AssignedLabel } from './assignedlabel.entity';
import { LicenseProcessingState } from './licenseprocessingstate.entity';
import { DirectoryObject } from './directoryobject.entity';
import { User } from './user.entity';
import { Group } from './group.entity';
import { DriveItem } from './driveitem.entity';
//#endregion

@Injectable()
export class GroupsService extends ODataEntityService<Group> {
  constructor(protected client: ODataClient) {
    super(client, 'groups', 'microsoft.graph.group');
  }

  //#region ODataApi Actions
  public assignLicense(entity: EntityKey<Group>): ODataActionResource<{addLicenses: AssignedLicense[], removeLicenses: string[]}, Group> {
    const resource = this.entity(entity).action<{addLicenses: AssignedLicense[], removeLicenses: string[]}, Group>('microsoft.graph.assignLicense');
    return resource;
  }
  public validateProperties(entity: EntityKey<Group>): ODataActionResource<{displayName: string, mailNickname: string, onBehalfOfUserId: string}, any> {
    const resource = this.entity(entity).action<{displayName: string, mailNickname: string, onBehalfOfUserId: string}, any>('microsoft.graph.validateProperties');
    return resource;
  }
  public subscribeByMail(entity: EntityKey<Group>): ODataActionResource<null, any> {
    const resource = this.entity(entity).action<null, any>('microsoft.graph.subscribeByMail');
    return resource;
  }
  public unsubscribeByMail(entity: EntityKey<Group>): ODataActionResource<null, any> {
    const resource = this.entity(entity).action<null, any>('microsoft.graph.unsubscribeByMail');
    return resource;
  }
  public addFavorite(entity: EntityKey<Group>): ODataActionResource<null, any> {
    const resource = this.entity(entity).action<null, any>('microsoft.graph.addFavorite');
    return resource;
  }
  public removeFavorite(entity: EntityKey<Group>): ODataActionResource<null, any> {
    const resource = this.entity(entity).action<null, any>('microsoft.graph.removeFavorite');
    return resource;
  }
  public resetUnseenCount(entity: EntityKey<Group>): ODataActionResource<null, any> {
    const resource = this.entity(entity).action<null, any>('microsoft.graph.resetUnseenCount');
    return resource;
  }
  public renew(entity: EntityKey<Group>): ODataActionResource<null, any> {
    const resource = this.entity(entity).action<null, any>('microsoft.graph.renew');
    return resource;
  }
  //#endregion
  //#region ODataApi Functions
  public delta(): ODataFunctionResource<null, Group> {
    const resource = this.entities().function<null, Group>('microsoft.graph.delta');
    return resource;
  }
  //#endregion
  //#region ODataApi Navigations
  public createdOnBehalfOf(entity: EntityKey<Group>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('createdOnBehalfOf');
  }
  public createdByUser(entity: EntityKey<Group>): ODataNavigationPropertyResource<User> {
    return this.entity(entity).navigationProperty<User>('drive/items/createdByUser');
  }
  public lastModifiedByUser(entity: EntityKey<Group>): ODataNavigationPropertyResource<User> {
    return this.entity(entity).navigationProperty<User>('drive/items/lastModifiedByUser');
  }
  public memberOf(entity: EntityKey<Group>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('memberOf');
  }
  public members(entity: EntityKey<Group>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('members');
  }
  public owners(entity: EntityKey<Group>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('owners');
  }
  public transitiveMemberOf(entity: EntityKey<Group>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('transitiveMemberOf');
  }
  public transitiveMembers(entity: EntityKey<Group>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('transitiveMembers');
  }
  //#endregion
}
