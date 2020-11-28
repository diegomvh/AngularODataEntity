import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { BaseItemCollection } from './baseitem.collection';
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
import { BaseItemModel } from './baseitem.model';
import { DriveModel } from './drive.model';
import { SiteModel } from './site.model';
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
import { DriveCollection } from './drive.collection';
import { OnenoteCollection } from './onenote.collection';
import { ListCollection } from './list.collection';
import { ItemAnalyticsCollection } from './itemanalytics.collection';
import { ColumnDefinitionCollection } from './columndefinition.collection';
import { ContentTypeCollection } from './contenttype.collection';
import { ItemActivityStatCollection } from './itemactivitystat.collection';
//#endregion

export class SiteCollection<E extends Site, M extends SiteModel<E>> extends BaseItemCollection<E, M> {
  //#region ODataApi Actions
  public add(value: Site[], options?: HttpOptions): Observable<SiteCollection<Site, SiteModel<Site>>> {
    var res = this._action<{value: Site[]}, Site>('microsoft.graph.add');
    res.segment.entitySet('sites');
    return res.call({value}, 'collection', options) as Observable<SiteCollection<Site, SiteModel<Site>>>;
  }
  public remove(value: Site[], options?: HttpOptions): Observable<SiteCollection<Site, SiteModel<Site>>> {
    var res = this._action<{value: Site[]}, Site>('microsoft.graph.remove');
    res.segment.entitySet('sites');
    return res.call({value}, 'collection', options) as Observable<SiteCollection<Site, SiteModel<Site>>>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
}