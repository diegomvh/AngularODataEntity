import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { AppListItem } from './applistitem.entity';
import { AppListItemModel } from './applistitem.model';
import { AppListItemCollection } from './applistitem.collection';
//#endregion

export interface IosNetworkUsageRule {
  //#region ODataApi Properties
  cellularDataBlocked: boolean;
  cellularDataBlockWhenRoaming: boolean;
  managedApps?: AppListItem[];
  //#endregion
}