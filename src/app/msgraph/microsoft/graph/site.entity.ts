import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { BaseItem } from './baseitem.entity';
import { PublicError } from './publicerror.entity';
import { Root } from './root.entity';
import { SharepointIds } from './sharepointids.entity';
import { SiteCollection } from './sitecollection.entity';
import { Drive } from './drive.entity';
import { Onenote } from './onenote.entity';
import { ItemAnalytics } from './itemanalytics.entity';
import { ColumnDefinition } from './columndefinition.entity';
import { ContentType } from './contenttype.entity';
import { List } from './list.entity';
//#endregion

export interface Site extends BaseItem {
  //#region ODataApi Properties
  error?: PublicError;
  displayName?: string;
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