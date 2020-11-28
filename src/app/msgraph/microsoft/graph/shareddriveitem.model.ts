import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { BaseItemModel } from './baseitem.model';
import { IdentitySet } from './identityset.entity';
import { Site } from './site.entity';
import { DriveItem } from './driveitem.entity';
import { List } from './list.entity';
import { ListItem } from './listitem.entity';
import { Permission } from './permission.entity';
import { SharedDriveItem } from './shareddriveitem.entity';
import { IdentitySetModel } from './identityset.model';
import { SiteModel } from './site.model';
import { DriveItemModel } from './driveitem.model';
import { ListModel } from './list.model';
import { ListItemModel } from './listitem.model';
import { PermissionModel } from './permission.model';
import { IdentitySetCollection } from './identityset.collection';
import { SiteCollection } from './site.collection';
import { DriveItemCollection } from './driveitem.collection';
import { ListCollection } from './list.collection';
import { ListItemCollection } from './listitem.collection';
import { PermissionCollection } from './permission.collection';
import { SharedDriveItemCollection } from './shareddriveitem.collection';
//#endregion

export class SharedDriveItemModel<E extends SharedDriveItem> extends BaseItemModel<E> {
  //#region ODataApi Properties
  owner?: IdentitySetModel<IdentitySet>;
  driveItem?: DriveItemModel<DriveItem>;
  items?: DriveItemCollection<DriveItem, DriveItemModel<DriveItem>>;
  list?: ListModel<List>;
  listItem?: ListItemModel<ListItem>;
  permission?: PermissionModel<Permission>;
  root?: DriveItemModel<DriveItem>;
  site?: SiteModel<Site>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}