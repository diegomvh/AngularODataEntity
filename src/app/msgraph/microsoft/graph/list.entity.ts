import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { BaseItem } from './baseitem.entity';
import { SharepointIds } from './sharepointids.entity';
import { ListInfo } from './listinfo.entity';
import { SystemFacet } from './systemfacet.entity';
import { Drive } from './drive.entity';
import { ColumnDefinition } from './columndefinition.entity';
import { ContentType } from './contenttype.entity';
import { ListItem } from './listitem.entity';
import { Subscription } from './subscription.entity';
//#endregion

export interface List extends BaseItem {
  //#region ODataApi Properties
  displayName?: string;
  list?: ListInfo;
  sharepointIds?: SharepointIds;
  system?: SystemFacet;
  columns?: ColumnDefinition[];
  contentTypes?: ContentType[];
  drive?: Drive;
  items?: ListItem[];
  subscriptions?: Subscription[];
  //#endregion
}