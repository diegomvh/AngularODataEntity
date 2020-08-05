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
//#endregion

export interface RemoteItem {
  //#region ODataApi Properties
  createdBy?: IdentitySet;
  createdDateTime?: Date;
  file?: File;
  fileSystemInfo?: FileSystemInfo;
  folder?: Folder;
  image?: Image;
  id?: string;
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