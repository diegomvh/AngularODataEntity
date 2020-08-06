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
import { GeoCoordinates } from './geocoordinates.entity';
import { Root } from './root.entity';
import { SharepointIds } from './sharepointids.entity';
import { Audio } from './audio.entity';
import { Deleted } from './deleted.entity';
import { File } from './file.entity';
import { FileSystemInfo } from './filesysteminfo.entity';
import { Folder } from './folder.entity';
import { Image } from './image.entity';
import { Package } from './package.entity';
import { PendingOperations } from './pendingoperations.entity';
import { Photo } from './photo.entity';
import { PublicationFacet } from './publicationfacet.entity';
import { RemoteItem } from './remoteitem.entity';
import { ItemReference } from './itemreference.entity';
import { Shared } from './shared.entity';
import { SpecialFolder } from './specialfolder.entity';
import { Video } from './video.entity';
import { SearchResult } from './searchresult.entity';
import { UploadSession } from './uploadsession.entity';
import { DriveItemUploadableProperties } from './driveitemuploadableproperties.entity';
import { DriveRecipient } from './driverecipient.entity';
import { ItemPreviewInfo } from './itempreviewinfo.entity';
import { DriveItem } from './driveitem.entity';
import { Permission } from './permission.entity';
import { ItemActivityStat } from './itemactivitystat.entity';
//#endregion

@Injectable()
export class WorkbooksService extends ODataEntityService<DriveItem> {
  constructor(protected client: ODataClient) {
    super(client, 'workbooks', 'microsoft.graph.driveItem');
  }

  //#region ODataApi Actions
  public checkin(entity: EntityKey<DriveItem>): ODataActionResource<{checkInAs: string, comment: string}, any> {
    const resource = this.entity(entity).action<{checkInAs: string, comment: string}, any>('microsoft.graph.checkin');
    return resource;
  }
  public checkout(entity: EntityKey<DriveItem>): ODataActionResource<null, any> {
    const resource = this.entity(entity).action<null, any>('microsoft.graph.checkout');
    return resource;
  }
  public copy(entity: EntityKey<DriveItem>): ODataActionResource<{name: string, parentReference: ItemReference}, DriveItem> {
    const resource = this.entity(entity).action<{name: string, parentReference: ItemReference}, DriveItem>('microsoft.graph.copy');
    return resource;
  }
  public createLink(entity: EntityKey<DriveItem>): ODataActionResource<{type: string, scope: string, expirationDateTime: Date, password: string, message: string}, Permission> {
    const resource = this.entity(entity).action<{type: string, scope: string, expirationDateTime: Date, password: string, message: string}, Permission>('microsoft.graph.createLink');
    return resource;
  }
  public createUploadSession(entity: EntityKey<DriveItem>): ODataActionResource<{item: DriveItemUploadableProperties, deferCommit: boolean}, UploadSession> {
    const resource = this.entity(entity).action<{item: DriveItemUploadableProperties, deferCommit: boolean}, UploadSession>('microsoft.graph.createUploadSession');
    return resource;
  }
  public follow(entity: EntityKey<DriveItem>): ODataActionResource<null, DriveItem> {
    const resource = this.entity(entity).action<null, DriveItem>('microsoft.graph.follow');
    return resource;
  }
  public unfollow(entity: EntityKey<DriveItem>): ODataActionResource<null, any> {
    const resource = this.entity(entity).action<null, any>('microsoft.graph.unfollow');
    return resource;
  }
  public invite(entity: EntityKey<DriveItem>): ODataActionResource<{requireSignIn: boolean, roles: string[], sendInvitation: boolean, message: string, recipients: DriveRecipient[], expirationDateTime: string, password: string}, Permission> {
    const resource = this.entity(entity).action<{requireSignIn: boolean, roles: string[], sendInvitation: boolean, message: string, recipients: DriveRecipient[], expirationDateTime: string, password: string}, Permission>('microsoft.graph.invite');
    return resource;
  }
  public preview(entity: EntityKey<DriveItem>): ODataActionResource<{page: string, zoom: number}, ItemPreviewInfo> {
    const resource = this.entity(entity).action<{page: string, zoom: number}, ItemPreviewInfo>('microsoft.graph.preview');
    return resource;
  }
  public restore(entity: EntityKey<DriveItem>): ODataActionResource<{parentReference: ItemReference, name: string}, DriveItem> {
    const resource = this.entity(entity).action<{parentReference: ItemReference, name: string}, DriveItem>('microsoft.graph.restore');
    return resource;
  }
  public validatePermission(entity: EntityKey<DriveItem>): ODataActionResource<{challengeToken: string, password: string}, any> {
    const resource = this.entity(entity).action<{challengeToken: string, password: string}, any>('microsoft.graph.validatePermission');
    return resource;
  }
  //#endregion
  //#region ODataApi Functions
  public delta(entity: EntityKey<DriveItem>): ODataFunctionResource<{token?: string}, DriveItem> {
    const resource = this.entity(entity).function<{token?: string}, DriveItem>('microsoft.graph.delta');
    return resource;
  }
  public getActivitiesByInterval(entity: EntityKey<DriveItem>): ODataFunctionResource<{startDateTime?: string, endDateTime?: string, interval?: string}, ItemActivityStat> {
    const resource = this.entity(entity).function<{startDateTime?: string, endDateTime?: string, interval?: string}, ItemActivityStat>('microsoft.graph.getActivitiesByInterval');
    return resource;
  }
  public search(entity: EntityKey<DriveItem>): ODataFunctionResource<{q: string}, DriveItem> {
    const resource = this.entity(entity).function<{q: string}, DriveItem>('microsoft.graph.search');
    return resource;
  }
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
