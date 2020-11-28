import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { BaseItemModel } from './baseitem.model';
import { SharepointIds } from './sharepointids.entity';
import { SystemFacet } from './systemfacet.entity';
import { ListInfo } from './listinfo.entity';
import { Drive } from './drive.entity';
import { List } from './list.entity';
import { ListItem } from './listitem.entity';
import { Subscription } from './subscription.entity';
import { ColumnDefinition } from './columndefinition.entity';
import { ContentType } from './contenttype.entity';
import { SharepointIdsModel } from './sharepointids.model';
import { SystemFacetModel } from './systemfacet.model';
import { ListInfoModel } from './listinfo.model';
import { DriveModel } from './drive.model';
import { ListItemModel } from './listitem.model';
import { SubscriptionModel } from './subscription.model';
import { ColumnDefinitionModel } from './columndefinition.model';
import { ContentTypeModel } from './contenttype.model';
import { SharepointIdsCollection } from './sharepointids.collection';
import { SystemFacetCollection } from './systemfacet.collection';
import { ListInfoCollection } from './listinfo.collection';
import { DriveCollection } from './drive.collection';
import { ListCollection } from './list.collection';
import { ListItemCollection } from './listitem.collection';
import { SubscriptionCollection } from './subscription.collection';
import { ColumnDefinitionCollection } from './columndefinition.collection';
import { ContentTypeCollection } from './contenttype.collection';
//#endregion

export class ListModel<E extends List> extends BaseItemModel<E> {
  //#region ODataApi Properties
  displayName?: string;
  list?: ListInfoModel<ListInfo>;
  sharepointIds?: SharepointIdsModel<SharepointIds>;
  system?: SystemFacetModel<SystemFacet>;
  columns?: ColumnDefinitionCollection<ColumnDefinition, ColumnDefinitionModel<ColumnDefinition>>;
  contentTypes?: ContentTypeCollection<ContentType, ContentTypeModel<ContentType>>;
  drive?: DriveModel<Drive>;
  items?: ListItemCollection<ListItem, ListItemModel<ListItem>>;
  subscriptions?: SubscriptionCollection<Subscription, SubscriptionModel<Subscription>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}