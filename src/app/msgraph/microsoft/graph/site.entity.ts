import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { BaseItem } from './baseitem.entity';
import { SharepointIds } from './sharepointids.complex';
import { Root } from './root.complex';
import { PublicError } from './publicerror.complex';
import { SiteCollection } from './sitecollection.complex';
import { Drive } from './drive.entity';
import { Onenote } from './onenote.entity';
import { List } from './list.entity';
import { ItemAnalytics } from './itemanalytics.entity';
import { ColumnDefinition } from './columndefinition.entity';
import { ContentType } from './contenttype.entity';
import { SharepointIdsModel } from './sharepointids.model';
import { RootModel } from './root.model';
import { PublicErrorModel } from './publicerror.model';
import { SiteCollectionModel } from './sitecollection.model';
import { BaseItemModel } from './baseitem.model';
import { DriveModel } from './drive.model';
import { SiteModel } from './site.model';
import { OnenoteModel } from './onenote.model';
import { ListModel } from './list.model';
import { ItemAnalyticsModel } from './itemanalytics.model';
import { ColumnDefinitionModel } from './columndefinition.model';
import { ContentTypeModel } from './contenttype.model';
import { SharepointIdsCollection } from './sharepointids.collection';
import { RootCollection } from './root.collection';
import { PublicErrorCollection } from './publicerror.collection';
import { SiteCollectionCollection } from './sitecollection.collection';
import { BaseItemCollection } from './baseitem.collection';
import { DriveCollection } from './drive.collection';
import { SiteCollection as EloquentSaha } from './site.collection';
import { OnenoteCollection } from './onenote.collection';
import { ListCollection } from './list.collection';
import { ItemAnalyticsCollection } from './itemanalytics.collection';
import { ColumnDefinitionCollection } from './columndefinition.collection';
import { ContentTypeCollection } from './contenttype.collection';
//#endregion

export interface Site extends BaseItem {
  //#region ODataApi Properties
  displayName?: string;
  error?: PublicError;
  root?: Root;
  sharepointIds?: SharepointIds;
  siteCollection?: SiteCollection;
  analytics?: ItemAnalytics;
  columns?: ColumnDefinition[];
  contentTypes?: ContentType[];
  drive?: Drive;
  drives?: Drive[];
  items?: BaseItem[];
  lists?: List[];
  sites?: Site[];
  onenote?: Onenote;
  //#endregion
}