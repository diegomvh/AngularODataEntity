import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { BaseItemModel } from './baseitem.model';
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
import { Workbook } from './workbook.entity';
import { ItemAnalytics } from './itemanalytics.entity';
import { ListItem } from './listitem.entity';
import { Permission } from './permission.entity';
import { Subscription } from './subscription.entity';
import { ThumbnailSet } from './thumbnailset.entity';
import { DriveItemVersion } from './driveitemversion.entity';
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
import { WorkbookModel } from './workbook.model';
import { ItemAnalyticsModel } from './itemanalytics.model';
import { ListItemModel } from './listitem.model';
import { PermissionModel } from './permission.model';
import { SubscriptionModel } from './subscription.model';
import { ThumbnailSetModel } from './thumbnailset.model';
import { DriveItemVersionModel } from './driveitemversion.model';
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
import { WorkbookCollection } from './workbook.collection';
import { ItemAnalyticsCollection } from './itemanalytics.collection';
import { ListItemCollection } from './listitem.collection';
import { PermissionCollection } from './permission.collection';
import { SubscriptionCollection } from './subscription.collection';
import { ThumbnailSetCollection } from './thumbnailset.collection';
import { DriveItemVersionCollection } from './driveitemversion.collection';
import { ItemActivityStatCollection } from './itemactivitystat.collection';
//#endregion

export class DriveItemModel<E extends DriveItem> extends BaseItemModel<E> {
  //#region ODataApi Properties
  audio?: AudioModel<Audio>;
  content?: any;
  cTag?: string;
  deleted?: DeletedModel<Deleted>;
  file?: FileModel<File>;
  fileSystemInfo?: FileSystemInfoModel<FileSystemInfo>;
  folder?: FolderModel<Folder>;
  image?: ImageModel<Image>;
  location?: GeoCoordinatesModel<GeoCoordinates>;
  package?: PackageModel<Package>;
  pendingOperations?: PendingOperationsModel<PendingOperations>;
  photo?: PhotoModel<Photo>;
  publication?: PublicationFacetModel<PublicationFacet>;
  remoteItem?: RemoteItemModel<RemoteItem>;
  root?: RootModel<Root>;
  searchResult?: SearchResultModel<SearchResult>;
  shared?: SharedModel<Shared>;
  sharepointIds?: SharepointIdsModel<SharepointIds>;
  size?: number;
  specialFolder?: SpecialFolderModel<SpecialFolder>;
  video?: VideoModel<Video>;
  webDavUrl?: string;
  workbook?: WorkbookModel<Workbook>;
  analytics?: ItemAnalyticsModel<ItemAnalytics>;
  children?: DriveItemCollection<DriveItem, DriveItemModel<DriveItem>>;
  listItem?: ListItemModel<ListItem>;
  permissions?: PermissionCollection<Permission, PermissionModel<Permission>>;
  subscriptions?: SubscriptionCollection<Subscription, SubscriptionModel<Subscription>>;
  thumbnails?: ThumbnailSetCollection<ThumbnailSet, ThumbnailSetModel<ThumbnailSet>>;
  versions?: DriveItemVersionCollection<DriveItemVersion, DriveItemVersionModel<DriveItemVersion>>;
  //#endregion
  //#region ODataApi Actions
  public restore(parentReference: ItemReference, name: string, options?: HttpOptions): Observable<DriveItemModel<DriveItem>> {
    var res = this._action<{parentReference: ItemReference, name: string}, DriveItem>('microsoft.graph.restore');
    res.segment.entitySet('workbooks');
    return res.call({parentReference, name}, 'model', options) as Observable<DriveItemModel<DriveItem>>;
  }
  public copy(name: string, parentReference: ItemReference, options?: HttpOptions): Observable<DriveItemModel<DriveItem>> {
    var res = this._action<{name: string, parentReference: ItemReference}, DriveItem>('microsoft.graph.copy');
    res.segment.entitySet('workbooks');
    return res.call({name, parentReference}, 'model', options) as Observable<DriveItemModel<DriveItem>>;
  }
  public createUploadSession(item: DriveItemUploadableProperties, deferCommit: boolean, options?: HttpOptions): Observable<UploadSessionModel<UploadSession>> {
    var res = this._action<{item: DriveItemUploadableProperties, deferCommit: boolean}, UploadSession>('microsoft.graph.createUploadSession');
    res.segment.entitySet('workbooks');
    return res.call({item, deferCommit}, 'model', options) as Observable<UploadSessionModel<UploadSession>>;
  }
  public checkin(checkInAs: string, comment: string, options?: HttpOptions): Observable<any> {
    var res = this._action<{checkInAs: string, comment: string}, any>('microsoft.graph.checkin');
    res.segment.entitySet('workbooks');
    return res.call({checkInAs, comment}, 'property', options) as Observable<any>;
  }
  public checkout(options?: HttpOptions): Observable<any> {
    var res = this._action<null, any>('microsoft.graph.checkout');
    res.segment.entitySet('workbooks');
    return res.call(null, 'property', options) as Observable<any>;
  }
  public createLink(type: string, scope: string, expirationDateTime: Date, password: string, message: string, options?: HttpOptions): Observable<PermissionModel<Permission>> {
    var res = this._action<{type: string, scope: string, expirationDateTime: Date, password: string, message: string}, Permission>('microsoft.graph.createLink');
    res.segment.entitySet('workbooks');
    return res.call({type, scope, expirationDateTime, password, message}, 'model', options) as Observable<PermissionModel<Permission>>;
  }
  public follow(options?: HttpOptions): Observable<DriveItemModel<DriveItem>> {
    var res = this._action<null, DriveItem>('microsoft.graph.follow');
    res.segment.entitySet('workbooks');
    return res.call(null, 'model', options) as Observable<DriveItemModel<DriveItem>>;
  }
  public invite(requireSignIn: boolean, roles: string[], sendInvitation: boolean, message: string, recipients: DriveRecipient[], expirationDateTime: string, password: string, options?: HttpOptions): Observable<PermissionCollection<Permission, PermissionModel<Permission>>> {
    var res = this._action<{requireSignIn: boolean, roles: string[], sendInvitation: boolean, message: string, recipients: DriveRecipient[], expirationDateTime: string, password: string}, Permission>('microsoft.graph.invite');
    res.segment.entitySet('workbooks');
    return res.call({requireSignIn, roles, sendInvitation, message, recipients, expirationDateTime, password}, 'collection', options) as Observable<PermissionCollection<Permission, PermissionModel<Permission>>>;
  }
  public preview(page: string, zoom: number, options?: HttpOptions): Observable<ItemPreviewInfoModel<ItemPreviewInfo>> {
    var res = this._action<{page: string, zoom: number}, ItemPreviewInfo>('microsoft.graph.preview');
    res.segment.entitySet('workbooks');
    return res.call({page, zoom}, 'model', options) as Observable<ItemPreviewInfoModel<ItemPreviewInfo>>;
  }
  public unfollow(options?: HttpOptions): Observable<any> {
    var res = this._action<null, any>('microsoft.graph.unfollow');
    res.segment.entitySet('workbooks');
    return res.call(null, 'property', options) as Observable<any>;
  }
  public validatePermission(challengeToken: string, password: string, options?: HttpOptions): Observable<any> {
    var res = this._action<{challengeToken: string, password: string}, any>('microsoft.graph.validatePermission');
    res.segment.entitySet('workbooks');
    return res.call({challengeToken, password}, 'property', options) as Observable<any>;
  }
  //#endregion
  //#region ODataApi Functions
  public delta(token?: string, options?: HttpOptions): Observable<DriveItemCollection<DriveItem, DriveItemModel<DriveItem>>> {
    var res = this._function<{token?: string}, DriveItem>('microsoft.graph.delta');
    res.segment.entitySet('workbooks');
    return res.call({token}, 'collection', options) as Observable<DriveItemCollection<DriveItem, DriveItemModel<DriveItem>>>;
  }
  public getActivitiesByInterval(startDateTime?: string, endDateTime?: string, interval?: string, options?: HttpOptions): Observable<ItemActivityStatCollection<ItemActivityStat, ItemActivityStatModel<ItemActivityStat>>> {
    var res = this._function<{startDateTime?: string, endDateTime?: string, interval?: string}, ItemActivityStat>('microsoft.graph.getActivitiesByInterval');
    res.segment.entitySet('workbooks');
    return res.call({startDateTime, endDateTime, interval}, 'collection', options) as Observable<ItemActivityStatCollection<ItemActivityStat, ItemActivityStatModel<ItemActivityStat>>>;
  }
  public search(q: string, options?: HttpOptions): Observable<DriveItemCollection<DriveItem, DriveItemModel<DriveItem>>> {
    var res = this._function<{q: string}, DriveItem>('microsoft.graph.search');
    res.segment.entitySet('workbooks');
    return res.call({q}, 'collection', options) as Observable<DriveItemCollection<DriveItem, DriveItemModel<DriveItem>>>;
  }
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}