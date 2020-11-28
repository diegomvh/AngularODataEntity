import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { BaseItemModel } from './baseitem.model';
import { SharepointIds } from './sharepointids.complex';
import { ContentTypeInfo } from './contenttypeinfo.complex';
import { DriveItem } from './driveitem.entity';
import { ItemAnalytics } from './itemanalytics.entity';
import { ListItem } from './listitem.entity';
import { FieldValueSet } from './fieldvalueset.entity';
import { ItemActivityStat } from './itemactivitystat.entity';
import { ListItemVersion } from './listitemversion.entity';
import { SharepointIdsModel } from './sharepointids.model';
import { ContentTypeInfoModel } from './contenttypeinfo.model';
import { DriveItemModel } from './driveitem.model';
import { ItemAnalyticsModel } from './itemanalytics.model';
import { FieldValueSetModel } from './fieldvalueset.model';
import { ItemActivityStatModel } from './itemactivitystat.model';
import { ListItemVersionModel } from './listitemversion.model';
import { SharepointIdsCollection } from './sharepointids.collection';
import { ContentTypeInfoCollection } from './contenttypeinfo.collection';
import { DriveItemCollection } from './driveitem.collection';
import { ItemAnalyticsCollection } from './itemanalytics.collection';
import { ListItemCollection } from './listitem.collection';
import { FieldValueSetCollection } from './fieldvalueset.collection';
import { ItemActivityStatCollection } from './itemactivitystat.collection';
import { ListItemVersionCollection } from './listitemversion.collection';
//#endregion

export class ListItemModel<E extends ListItem> extends BaseItemModel<E> {
  //#region ODataApi Properties
  contentType?: ContentTypeInfoModel<ContentTypeInfo>;
  sharepointIds?: SharepointIdsModel<SharepointIds>;
  analytics?: ItemAnalyticsModel<ItemAnalytics>;
  driveItem?: DriveItemModel<DriveItem>;
  fields?: FieldValueSetModel<FieldValueSet>;
  versions?: ListItemVersionCollection<ListItemVersion, ListItemVersionModel<ListItemVersion>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public getActivitiesByInterval(startDateTime?: string, endDateTime?: string, interval?: string, options?: HttpOptions): Observable<ItemActivityStatCollection<ItemActivityStat, ItemActivityStatModel<ItemActivityStat>>> {
    var res = this._function<{startDateTime?: string, endDateTime?: string, interval?: string}, ItemActivityStat>('microsoft.graph.getActivitiesByInterval');
    res.segment.entitySet('');
    return res.call({startDateTime, endDateTime, interval}, 'collection', options) as Observable<ItemActivityStatCollection<ItemActivityStat, ItemActivityStatModel<ItemActivityStat>>>;
  }
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}