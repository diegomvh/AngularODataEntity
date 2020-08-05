import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { BaseItem } from './baseitem.entity';
import { IdentitySet } from './identityset.entity';
import { Site } from './site.entity';
import { List } from './list.entity';
import { ListItem } from './listitem.entity';
import { DriveItem } from './driveitem.entity';
import { Permission } from './permission.entity';
//#endregion

export interface SharedDriveItem extends BaseItem {
  //#region ODataApi Properties
  owner?: IdentitySet;
  driveItem?: DriveItem;
  items?: DriveItem[];
  list?: List;
  listItem?: ListItem;
  permission?: Permission;
  root?: DriveItem;
  site?: Site;
  //#endregion
}