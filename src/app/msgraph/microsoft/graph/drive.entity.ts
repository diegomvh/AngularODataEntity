import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { BaseItem } from './baseitem.entity';
import { IdentitySet } from './identityset.complex';
import { Quota } from './quota.complex';
import { SharepointIds } from './sharepointids.complex';
import { SystemFacet } from './systemfacet.complex';
import { DriveItem } from './driveitem.entity';
import { List } from './list.entity';
import { IdentitySetModel } from './identityset.model';
import { QuotaModel } from './quota.model';
import { SharepointIdsModel } from './sharepointids.model';
import { SystemFacetModel } from './systemfacet.model';
import { BaseItemModel } from './baseitem.model';
import { DriveItemModel } from './driveitem.model';
import { ListModel } from './list.model';
import { IdentitySetCollection } from './identityset.collection';
import { QuotaCollection } from './quota.collection';
import { SharepointIdsCollection } from './sharepointids.collection';
import { SystemFacetCollection } from './systemfacet.collection';
import { BaseItemCollection } from './baseitem.collection';
import { DriveItemCollection } from './driveitem.collection';
import { ListCollection } from './list.collection';
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