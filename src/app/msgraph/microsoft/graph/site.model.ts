import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { BaseItemModel } from './baseitem.model';
import { SharepointIds } from './sharepointids.complex';
import { Root } from './root.complex';
import { PublicError } from './publicerror.complex';
import { SiteCollection } from './sitecollection.complex';
import { BaseItem } from './baseitem.entity';
import { Drive } from './drive.entity';
import { Site } from './site.entity';
import { Onenote } from './onenote.entity';
import { List } from './list.entity';
import { ItemAnalytics } from './itemanalytics.entity';
import { ColumnDefinition } from './columndefinition.entity';
import { ContentType } from './contenttype.entity';
import { ItemActivityStat } from './itemactivitystat.entity';
import { SharepointIdsModel } from './sharepointids.model';
import { RootModel } from './root.model';
import { PublicErrorModel } from './publicerror.model';
import { SiteCollectionModel } from './sitecollection.model';
import { DriveModel } from './drive.model';
import { OnenoteModel } from './onenote.model';
import { ListModel } from './list.model';
import { ItemAnalyticsModel } from './itemanalytics.model';
import { ColumnDefinitionModel } from './columndefinition.model';
import { ContentTypeModel } from './contenttype.model';
import { ItemActivityStatModel } from './itemactivitystat.model';
import { SharepointIdsCollection } from './sharepointids.collection';
import { RootCollection } from './root.collection';
import { PublicErrorCollection } from './publicerror.collection';
import { SiteCollectionCollection } from './sitecollection.collection';
import { BaseItemCollection } from './baseitem.collection';
import { DriveCollection } from './drive.collection';
import { SiteCollection as CoolTharp } from './site.collection';
import { OnenoteCollection } from './onenote.collection';
import { ListCollection } from './list.collection';
import { ItemAnalyticsCollection } from './itemanalytics.collection';
import { ColumnDefinitionCollection } from './columndefinition.collection';
import { ContentTypeCollection } from './contenttype.collection';
import { ItemActivityStatCollection } from './itemactivitystat.collection';
//#endregion

export class SiteModel<E extends Site> extends BaseItemModel<E> {
  //#region ODataApi Properties
  displayName?: string;
  error?: PublicErrorModel<PublicError>;
  root?: RootModel<Root>;
  sharepointIds?: SharepointIdsModel<SharepointIds>;
  siteCollection?: SiteCollectionModel<SiteCollection>;
  analytics?: ItemAnalyticsModel<ItemAnalytics>;
  columns?: ColumnDefinitionCollection<ColumnDefinition, ColumnDefinitionModel<ColumnDefinition>>;
  contentTypes?: ContentTypeCollection<ContentType, ContentTypeModel<ContentType>>;
  drive?: DriveModel<Drive>;
  drives?: DriveCollection<Drive, DriveModel<Drive>>;
  items?: BaseItemCollection<BaseItem, BaseItemModel<BaseItem>>;
  lists?: ListCollection<List, ListModel<List>>;
  sites?: CoolTharp<Site, SiteModel<Site>>;
  onenote?: OnenoteModel<Onenote>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public getActivitiesByInterval(startDateTime?: string, endDateTime?: string, interval?: string, options?: HttpOptions): Observable<ItemActivityStatCollection<ItemActivityStat, ItemActivityStatModel<ItemActivityStat>>> {
    var res = this._function<{startDateTime?: string, endDateTime?: string, interval?: string}, ItemActivityStat>('microsoft.graph.getActivitiesByInterval');
    res.segment.entitySet('sites');
    return res.call({startDateTime, endDateTime, interval}, 'collection', options) as Observable<ItemActivityStatCollection<ItemActivityStat, ItemActivityStatModel<ItemActivityStat>>>;
  }
  public getByPath(path: string, options?: HttpOptions): Observable<SiteModel<Site>> {
    var res = this._function<{path: string}, Site>('microsoft.graph.getByPath');
    res.segment.entitySet('sites');
    return res.call({path}, 'model', options) as Observable<SiteModel<Site>>;
  }
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}