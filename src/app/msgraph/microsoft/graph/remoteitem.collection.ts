import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IdentitySet } from './identityset.complex';
import { SharepointIds } from './sharepointids.complex';
import { File } from './file.complex';
import { FileSystemInfo } from './filesysteminfo.complex';
import { Folder } from './folder.complex';
import { Image } from './image.complex';
import { Package } from './package.complex';
import { RemoteItem } from './remoteitem.complex';
import { ItemReference } from './itemreference.complex';
import { Shared } from './shared.complex';
import { SpecialFolder } from './specialfolder.complex';
import { Video } from './video.complex';
import { IdentitySetModel } from './identityset.model';
import { SharepointIdsModel } from './sharepointids.model';
import { FileModel } from './file.model';
import { FileSystemInfoModel } from './filesysteminfo.model';
import { FolderModel } from './folder.model';
import { ImageModel } from './image.model';
import { PackageModel } from './package.model';
import { RemoteItemModel } from './remoteitem.model';
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

export class RemoteItemCollection<E extends RemoteItem, M extends RemoteItemModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}