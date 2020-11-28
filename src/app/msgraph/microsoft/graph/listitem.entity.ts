import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { BaseItem } from './baseitem.entity';
import { SharepointIds } from './sharepointids.entity';
import { ContentTypeInfo } from './contenttypeinfo.entity';
import { DriveItem } from './driveitem.entity';
import { ItemAnalytics } from './itemanalytics.entity';
import { FieldValueSet } from './fieldvalueset.entity';
import { ListItemVersion } from './listitemversion.entity';
import { SharepointIdsModel } from './sharepointids.model';
import { ContentTypeInfoModel } from './contenttypeinfo.model';
import { BaseItemModel } from './baseitem.model';
import { DriveItemModel } from './driveitem.model';
import { ItemAnalyticsModel } from './itemanalytics.model';
import { FieldValueSetModel } from './fieldvalueset.model';
import { ListItemVersionModel } from './listitemversion.model';
import { SharepointIdsCollection } from './sharepointids.collection';
import { ContentTypeInfoCollection } from './contenttypeinfo.collection';
import { BaseItemCollection } from './baseitem.collection';
import { DriveItemCollection } from './driveitem.collection';
import { ItemAnalyticsCollection } from './itemanalytics.collection';
import { FieldValueSetCollection } from './fieldvalueset.collection';
import { ListItemVersionCollection } from './listitemversion.collection';
//#endregion

export interface ListItem extends BaseItem {
  //#region ODataApi Properties
  contentType?: ContentTypeInfo;
  sharepointIds?: SharepointIds;
  analytics?: ItemAnalytics;
  driveItem?: DriveItem;
  fields?: FieldValueSet;
  versions?: ListItemVersion[];
  //#endregion
}