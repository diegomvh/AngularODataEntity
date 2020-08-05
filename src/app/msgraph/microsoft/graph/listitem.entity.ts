import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { BaseItem } from './baseitem.entity';
import { SharepointIds } from './sharepointids.entity';
import { ContentTypeInfo } from './contenttypeinfo.entity';
import { ItemAnalytics } from './itemanalytics.entity';
import { DriveItem } from './driveitem.entity';
import { FieldValueSet } from './fieldvalueset.entity';
import { ListItemVersion } from './listitemversion.entity';
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