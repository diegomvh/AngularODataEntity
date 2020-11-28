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
import { GeoCoordinates } from './geocoordinates.complex';
import { SharepointIds } from './sharepointids.complex';
import { Audio } from './audio.complex';
import { Deleted } from './deleted.complex';
import { File } from './file.complex';
import { FileSystemInfo } from './filesysteminfo.complex';
import { Folder } from './folder.complex';
import { Image } from './image.complex';
import { Package } from './package.complex';
import { PendingOperations } from './pendingoperations.complex';
import { Photo } from './photo.complex';
import { PublicationFacet } from './publicationfacet.complex';
import { RemoteItem } from './remoteitem.complex';
import { ItemReference } from './itemreference.complex';
import { Shared } from './shared.complex';
import { SpecialFolder } from './specialfolder.complex';
import { Video } from './video.complex';
import { Root } from './root.complex';
import { SearchResult } from './searchresult.complex';
import { UploadSession } from './uploadsession.complex';
import { DriveItemUploadableProperties } from './driveitemuploadableproperties.complex';
import { DriveRecipient } from './driverecipient.complex';
import { ItemPreviewInfo } from './itempreviewinfo.complex';
import { DriveItem } from './driveitem.entity';
import { Permission } from './permission.entity';
import { ItemActivityStat } from './itemactivitystat.entity';
import { GeoCoordinatesModel } from './geocoordinates.model';
import { SharepointIdsModel } from './sharepointids.model';
import { AudioModel } from './audio.model';
import { DeletedModel } from './deleted.model';
import { FileModel } from './file.model';
import { FileSystemInfoModel } from './filesysteminfo.model';
import { FolderModel } from './folder.model';
import { ImageModel } from './image.model';
import { PackageModel } from './package.model';
import { PendingOperationsModel } from './pendingoperations.model';
import { PhotoModel } from './photo.model';
import { PublicationFacetModel } from './publicationfacet.model';
import { RemoteItemModel } from './remoteitem.model';
import { ItemReferenceModel } from './itemreference.model';
import { SharedModel } from './shared.model';
import { SpecialFolderModel } from './specialfolder.model';
import { VideoModel } from './video.model';
import { RootModel } from './root.model';
import { SearchResultModel } from './searchresult.model';
import { UploadSessionModel } from './uploadsession.model';
import { DriveItemUploadablePropertiesModel } from './driveitemuploadableproperties.model';
import { DriveRecipientModel } from './driverecipient.model';
import { ItemPreviewInfoModel } from './itempreviewinfo.model';
import { DriveItemModel } from './driveitem.model';
import { PermissionModel } from './permission.model';
import { ItemActivityStatModel } from './itemactivitystat.model';
import { GeoCoordinatesCollection } from './geocoordinates.collection';
import { SharepointIdsCollection } from './sharepointids.collection';
import { AudioCollection } from './audio.collection';
import { DeletedCollection } from './deleted.collection';
import { FileCollection } from './file.collection';
import { FileSystemInfoCollection } from './filesysteminfo.collection';
import { FolderCollection } from './folder.collection';
import { ImageCollection } from './image.collection';
import { PackageCollection } from './package.collection';
import { PendingOperationsCollection } from './pendingoperations.collection';
import { PhotoCollection } from './photo.collection';
import { PublicationFacetCollection } from './publicationfacet.collection';
import { RemoteItemCollection } from './remoteitem.collection';
import { ItemReferenceCollection } from './itemreference.collection';
import { SharedCollection } from './shared.collection';
import { SpecialFolderCollection } from './specialfolder.collection';
import { VideoCollection } from './video.collection';
import { RootCollection } from './root.collection';
import { SearchResultCollection } from './searchresult.collection';
import { UploadSessionCollection } from './uploadsession.collection';
import { DriveItemUploadablePropertiesCollection } from './driveitemuploadableproperties.collection';
import { DriveRecipientCollection } from './driverecipient.collection';
import { ItemPreviewInfoCollection } from './itempreviewinfo.collection';
import { DriveItemCollection } from './driveitem.collection';
import { PermissionCollection } from './permission.collection';
import { ItemActivityStatCollection } from './itemactivitystat.collection';
//#endregion

@Injectable()
export class WorkbooksService extends ODataEntityService<DriveItem> {
  constructor(protected client: ODataClient) {
    super(client, 'workbooks', 'microsoft.graph.driveItem');
  }

  //#region ODataApi Model
  driveItemModel(): DriveItemModel<DriveItem> {
    return this.entity().asModel() as DriveItemModel<DriveItem>;
  }
  //#endregion
  //#region ODataApi Collection
  driveItemCollection(): DriveItemCollection<DriveItem, DriveItemModel<DriveItem>> {
    return this.entities().asCollection() as DriveItemCollection<DriveItem, DriveItemModel<DriveItem>>;
  }
  //#endregion
  //#region ODataApi Actions
  public restore(entity: EntityKey<DriveItem>): ODataActionResource<{parentReference: ItemReference, name: string}, DriveItem> {
    const resource = this.entity(entity).action<{parentReference: ItemReference, name: string}, DriveItem>('microsoft.graph.restore');
    return resource;
  }
  public copy(entity: EntityKey<DriveItem>): ODataActionResource<{name: string, parentReference: ItemReference}, DriveItem> {
    const resource = this.entity(entity).action<{name: string, parentReference: ItemReference}, DriveItem>('microsoft.graph.copy');
    return resource;
  }
  public createUploadSession(entity: EntityKey<DriveItem>): ODataActionResource<{item: DriveItemUploadableProperties, deferCommit: boolean}, UploadSession> {
    const resource = this.entity(entity).action<{item: DriveItemUploadableProperties, deferCommit: boolean}, UploadSession>('microsoft.graph.createUploadSession');
    return resource;
  }
  public checkin(entity: EntityKey<DriveItem>): ODataActionResource<{checkInAs: string, comment: string}, any> {
    const resource = this.entity(entity).action<{checkInAs: string, comment: string}, any>('microsoft.graph.checkin');
    return resource;
  }
  public checkout(entity: EntityKey<DriveItem>): ODataActionResource<null, any> {
    const resource = this.entity(entity).action<null, any>('microsoft.graph.checkout');
    return resource;
  }
  public createLink(entity: EntityKey<DriveItem>): ODataActionResource<{type: string, scope: string, expirationDateTime: Date, password: string, message: string}, Permission> {
    const resource = this.entity(entity).action<{type: string, scope: string, expirationDateTime: Date, password: string, message: string}, Permission>('microsoft.graph.createLink');
    return resource;
  }
  public follow(entity: EntityKey<DriveItem>): ODataActionResource<null, DriveItem> {
    const resource = this.entity(entity).action<null, DriveItem>('microsoft.graph.follow');
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
  public unfollow(entity: EntityKey<DriveItem>): ODataActionResource<null, any> {
    const resource = this.entity(entity).action<null, any>('microsoft.graph.unfollow');
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
