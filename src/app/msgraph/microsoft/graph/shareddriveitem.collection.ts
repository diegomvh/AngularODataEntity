import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { BaseItemCollection } from './baseitem.collection';
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
import { SharedDriveItemModel } from './shareddriveitem.model';
import { IdentitySetCollection } from './identityset.collection';
import { SiteCollection } from './site.collection';
import { DriveItemCollection } from './driveitem.collection';
import { ListCollection } from './list.collection';
import { ListItemCollection } from './listitem.collection';
import { PermissionCollection } from './permission.collection';
//#endregion

export class SharedDriveItemCollection<E extends SharedDriveItem, M extends SharedDriveItemModel<E>> extends BaseItemCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}