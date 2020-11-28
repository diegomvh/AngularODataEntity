import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { IdentitySet } from './identityset.entity';
import { SharepointIds } from './sharepointids.entity';
import { File } from './file.entity';
import { FileSystemInfo } from './filesysteminfo.entity';
import { Folder } from './folder.entity';
import { Image } from './image.entity';
import { Package } from './package.entity';
import { ItemReference } from './itemreference.entity';
import { Shared } from './shared.entity';
import { SpecialFolder } from './specialfolder.entity';
import { Video } from './video.entity';
import { IdentitySetModel } from './identityset.model';
import { SharepointIdsModel } from './sharepointids.model';
import { FileModel } from './file.model';
import { FileSystemInfoModel } from './filesysteminfo.model';
import { FolderModel } from './folder.model';
import { ImageModel } from './image.model';
import { PackageModel } from './package.model';
import { ItemReferenceModel } from './itemreference.model';
import { SharedModel } from './shared.model';
import { SpecialFolderModel } from './specialfolder.model';
import { VideoModel } from './video.model';
import { IdentitySetCollection } from './identityset.collection';
import { SharepointIdsCollection } from './sharepointids.collection';
import { FileCollection } from './file.collection';
import { FileSystemInfoCollection } from './filesysteminfo.collection';
import { FolderCollection } from './folder.collection';
import { ImageCollection } from './image.collection';
import { PackageCollection } from './package.collection';
import { ItemReferenceCollection } from './itemreference.collection';
import { SharedCollection } from './shared.collection';
import { SpecialFolderCollection } from './specialfolder.collection';
import { VideoCollection } from './video.collection';
//#endregion

export interface RemoteItem {
  //#region ODataApi Properties
  createdBy?: IdentitySet;
  createdDateTime?: Date;
  file?: File;
  fileSystemInfo?: FileSystemInfo;
  folder?: Folder;
  id?: string;
  image?: Image;
  lastModifiedBy?: IdentitySet;
  lastModifiedDateTime?: Date;
  name?: string;
  package?: Package;
  parentReference?: ItemReference;
  shared?: Shared;
  sharepointIds?: SharepointIds;
  size?: number;
  specialFolder?: SpecialFolder;
  video?: Video;
  webDavUrl?: string;
  webUrl?: string;
  //#endregion
}