import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { BaseItemCollection } from './baseitem.collection';
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
import { ListItemModel } from './listitem.model';
import { FieldValueSetModel } from './fieldvalueset.model';
import { ItemActivityStatModel } from './itemactivitystat.model';
import { ListItemVersionModel } from './listitemversion.model';
import { SharepointIdsCollection } from './sharepointids.collection';
import { ContentTypeInfoCollection } from './contenttypeinfo.collection';
import { DriveItemCollection } from './driveitem.collection';
import { ItemAnalyticsCollection } from './itemanalytics.collection';
import { FieldValueSetCollection } from './fieldvalueset.collection';
import { ItemActivityStatCollection } from './itemactivitystat.collection';
import { ListItemVersionCollection } from './listitemversion.collection';
//#endregion

export class ListItemCollection<E extends ListItem, M extends ListItemModel<E>> extends BaseItemCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}