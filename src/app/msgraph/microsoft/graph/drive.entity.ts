import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { BaseItem } from './baseitem.entity';
import { IdentitySet } from './identityset.entity';
import { SharepointIds } from './sharepointids.entity';
import { SystemFacet } from './systemfacet.entity';
import { Quota } from './quota.entity';
import { List } from './list.entity';
import { DriveItem } from './driveitem.entity';
//#endregion

export interface Drive extends BaseItem {
  //#region ODataApi Properties
  driveType?: string;
  owner?: IdentitySet;
  quota?: Quota;
  sharePointIds?: SharepointIds;
  system?: SystemFacet;
  following?: DriveItem[];
  items?: DriveItem[];
  list?: List;
  root?: DriveItem;
  special?: DriveItem[];
  //#endregion
}