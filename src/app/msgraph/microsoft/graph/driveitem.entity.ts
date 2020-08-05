import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { BaseItem } from './baseitem.entity';
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
import { Shared } from './shared.entity';
import { SpecialFolder } from './specialfolder.entity';
import { Video } from './video.entity';
import { SearchResult } from './searchresult.entity';
import { ItemAnalytics } from './itemanalytics.entity';
import { ListItem } from './listitem.entity';
import { Subscription } from './subscription.entity';
import { Workbook } from './workbook.entity';
import { Permission } from './permission.entity';
import { ThumbnailSet } from './thumbnailset.entity';
import { DriveItemVersion } from './driveitemversion.entity';
//#endregion

export interface DriveItem extends BaseItem {
  //#region ODataApi Properties
  audio?: Audio;
  content?: any;
  cTag?: string;
  deleted?: Deleted;
  file?: File;
  fileSystemInfo?: FileSystemInfo;
  folder?: Folder;
  image?: Image;
  location?: GeoCoordinates;
  package?: Package;
  pendingOperations?: PendingOperations;
  photo?: Photo;
  publication?: PublicationFacet;
  remoteItem?: RemoteItem;
  root?: Root;
  searchResult?: SearchResult;
  shared?: Shared;
  sharepointIds?: SharepointIds;
  size?: number;
  specialFolder?: SpecialFolder;
  video?: Video;
  webDavUrl?: string;
  workbook?: Workbook;
  analytics?: ItemAnalytics;
  children?: DriveItem[];
  listItem?: ListItem;
  permissions?: Permission[];
  subscriptions?: Subscription[];
  thumbnails?: ThumbnailSet[];
  versions?: DriveItemVersion[];
  //#endregion
}