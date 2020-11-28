import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { BaseItem } from './baseitem.entity';
import { SharepointIds } from './sharepointids.complex';
import { SystemFacet } from './systemfacet.complex';
import { ListInfo } from './listinfo.complex';
import { Drive } from './drive.entity';
import { ListItem } from './listitem.entity';
import { Subscription } from './subscription.entity';
import { ColumnDefinition } from './columndefinition.entity';
import { ContentType } from './contenttype.entity';
import { SharepointIdsModel } from './sharepointids.model';
import { SystemFacetModel } from './systemfacet.model';
import { ListInfoModel } from './listinfo.model';
import { BaseItemModel } from './baseitem.model';
import { DriveModel } from './drive.model';
import { ListItemModel } from './listitem.model';
import { SubscriptionModel } from './subscription.model';
import { ColumnDefinitionModel } from './columndefinition.model';
import { ContentTypeModel } from './contenttype.model';
import { SharepointIdsCollection } from './sharepointids.collection';
import { SystemFacetCollection } from './systemfacet.collection';
import { ListInfoCollection } from './listinfo.collection';
import { BaseItemCollection } from './baseitem.collection';
import { DriveCollection } from './drive.collection';
import { ListItemCollection } from './listitem.collection';
import { SubscriptionCollection } from './subscription.collection';
import { ColumnDefinitionCollection } from './columndefinition.collection';
import { ContentTypeCollection } from './contenttype.collection';
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